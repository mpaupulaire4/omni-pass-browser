<script>
  import { calculateMasterKey } from 'omni-pass-core'
  import zxcvbn from 'zxcvbn'
  import { loading } from './stores';
  import Input from 'omni-pass-ui/src/Input.svelte';
  import Button from 'omni-pass-ui/src/Button.svelte';
  import { master } from './stores'
  import { PasswordStrengths, WarningClasses, WarningBGClasses } from './constants'

  let username = ''
  let password = ''
  let tip = false

  $: results = zxcvbn(password, [
    'master',
    'omni',
    'pass',
    'omni-pass',
  ])
  $: score = results.score
  $: warning = results.feedback.warning
  $: suggestions = results.feedback.suggestions


  async function submitHandler() {
    if ($loading) return
    $loading = true
    try {
      $master = await calculateMasterKey(username, password)
    } finally {
      $loading = false
    }
  }
</script>
<form
  class="content p-3"
  on:submit|preventDefault|stopPropagation="{submitHandler}"
  autocomplete="off"
>
  <Input
    bind:value="{username}"
    placeholder="Master Username"
    iconLeft="user"
  />
  <div class="relative">
    <Input
      bind:value="{password}"
      type="password"
      placeholder="Master Password"
      iconLeft="lock"
      iconRight="right-chevrom"
    >
      <span
        slot="help"
        on:mouseover="{() => tip = true}"
        on:mouseout="{() => tip = false}"
        class="{WarningClasses[score]}"
      >
        {#if password}
          Strength: {PasswordStrengths[score]}
        {/if}
      </span>
    </Input>
    {#if tip && suggestions.length}
      <div class="{`flex flex-col flex-1 absolute rounded text-gray-100 shadow left-0 right-0 px-1 py-2 text-2xs ${WarningBGClasses[score]} bottom-0`}">
        {#each suggestions as sugg}
          <span> - {sugg}</span>
        {/each}
      </div>
    {/if}
  </div>
  <input type="submit" class="hidden"/>
</form>


<style>
.content > :global(div:not(:last-child)) {
  @apply mb-3;
}
</style>