<script>
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';
</script>

<form
  class="content flex-1 p-3"
  on:submit|preventDefault="{(e) => console.log(e)}"
  autocomplete="off"
>
  <Input
    placeholder="Master Username"
    iconLeft="user"
    name="username"
  />
  <Input
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