<script>
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';

  let username = ''
  let password = ''

  function submitHandler() {
    console.log(username, password, 123)
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
    name="username"
  />
  <Input
    bind:value="{password}"
    name="password"
    type="password"
    placeholder="Master Password"
    iconLeft="lock"
  />
  <div class="flex justify-end">
    <Button>
      Authenticate
    </Button>
  </div>
</form>


<style>
.content > :global(div) {
  @apply mb-3;
}
</style>