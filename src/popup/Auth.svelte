<script>
  import { calculateMasterKey } from 'omni-pass-core'
  import zxcvbn from 'zxcvbn'
  import { loading } from './stores';
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';
  import PassDisplay from '../common/PassDisplay.svelte';
  import { master } from './stores'

  const warningClasses = [
    'text-red-600',
    'text-orange-600',
    'text-yellow-600',
    'text-green-600',
    'text-blue-600',
  ]

  let username = ''
  let password = ''

  $: results = zxcvbn(password, [
    'master',
    'omni',
    'pass',
    'omni-pass',
  ])
  $: score = results.score
  $: warning = results.feedback.warning


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
      iconRightFocus="{warningClasses[score]}"
      on:righticonmouseover="{() => console.log('here')}"
      on:righticonmouseout="{() => console.log('out')}"
    />
    <span class="{`flex-1 text-xs ${warningClasses[score]}`}">
      {warning}
    </span>
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
</style>