<script>
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';
  import PassDisplay from '../common/PassDisplay.svelte';
  import { calculateMasterKey } from 'omni-pass-core'

  let username = ''
  let password = ''

  export let callback = (data) => console.log(data)

  function submitHandler() {
    callback(calculateMasterKey(username, password))
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
    <Button>
      Continue
    </Button>
  </div>
</form>


<style>
.content > :global(div:not(:last-child)) {
  @apply mb-3;
}
</style>