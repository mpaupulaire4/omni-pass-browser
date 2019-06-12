<script>
  import Header from '../common/Header.svelte';
  import Input from '../common/Input.svelte';
  import Auth from './Auth.svelte';
  import Generator from './Generator.svelte';
</script>

<div class="m-px container">
  <Header />
  <div>
    <Auth />
    <!-- <Generator /> -->
  </div>
</div>

<style>
	.container {
    width: 300px;
	}
</style>