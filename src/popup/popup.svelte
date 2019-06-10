<script>
  import Header from '../common/Header.svelte';
  import Input from '../common/Input.svelte';
</script>

<div class="m-px flex flex-col container">
  <Header />
  <div class="content flex-1 p-3">
    <Input placeholder="Master Username" iconLeft="user" />
    <Input type="password" placeholder="Master Password" iconLeft="lock" />
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