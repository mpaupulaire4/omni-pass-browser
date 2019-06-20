<script>
  import { calculateMasterKey } from 'omni-pass-core'
  import { loading } from './stores';
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';
  import PassDisplay from '../common/PassDisplay.svelte';
  import { master } from './stores'

  let username = ''
  let password = ''

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
  <Input
    bind:value="{password}"
    name="password"
    type="password"
    autocomplete="off"
    placeholder="Master Password"
    iconLeft="lock"
  />
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