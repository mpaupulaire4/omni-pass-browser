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
    placeholder="Site"
    iconLeft="globe"
    name="site"
  />
  <Input
    type="password"
    placeholder="Context"
    name="password"
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