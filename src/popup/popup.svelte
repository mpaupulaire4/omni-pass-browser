<script>
  import Header from '../common/Header.svelte';
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';
</script>

<div class="m-px flex flex-col container">
  <Header />
  <div class="content flex-1 p-3">
    <Input placeholder="Master Username" iconLeft="globe" />
    <Input type="password" placeholder="Master Password" iconLeft="lock" />
    <div class="flex justify-end">
      <Button>Authenticate</Button>
    </div>
  </div>
</div>

<style>
	.container {
    width: 300px;
	}
  .content > :global(div) {
    @apply mb-3;
  }
</style>