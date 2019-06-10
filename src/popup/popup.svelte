<script>
  import Header from '../common/Header.svelte';
  import Input from '../common/Input.svelte';
  import Auth from './Auth.svelte';
  import Generator from './Generator.svelte';
</script>

<div class="m-px flex flex-col container">
  <Header />
  <div
    class="content flex-1 p-3"
    on:submit|preventDefault="{(e) => console.log(e)}"
    autocomplete="off"
  >
    <Auth />
    <Generator />
  </div>
</div>

<style>
	.container {
    width: 300px;
	}
</style>