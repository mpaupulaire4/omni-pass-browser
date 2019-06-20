<script>
  import { calculateMasterKey } from 'omni-pass-core'
  import zxcvbn from 'zxcvbn'
  import { loading } from './stores';
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';
  import PassDisplay from '../common/PassDisplay.svelte';
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
    autocomplete="off"
    iconLeft="user"
    name="username"
  />
  <div class="relative">
    <Input
      bind:value="{password}"
      name="password"
      type="password"
      autocomplete="off"
      placeholder="Master Password"
      iconLeft="lock"
      iconRight="information"
      iconRightFocus="{WarningClasses[score]}"
      on:righticonmouseover="{() => tip = true}"
      on:righticonmouseout="{() => tip = false}"
    />
    {#if tip}
      <div class="{`flex flex-col flex-1 absolute rounded-b text-gray-100 shadow left-0 right-0 p-1 text-2xs ${WarningBGClasses[score]}`}">
        <span>
          <strong>Password Strength:</strong> {PasswordStrengths[score]}
          {#if warning}
            - <span>{warning}</span>
          {/if}
        </span>
        {#each suggestions as sugg}
          <span> - {sugg}</span>
        {/each}
      </div>
    {/if}
  </div>
  <div class="flex justify-end">
    <Button disabled="{$loading}">
      Continue
    </Button>
  </div>
</form>


<style>
.content > :global(div:not(:last-child)) {
  @apply mb-3;
}
.text-2xs {
  font-size: .6rem;
}
</style>