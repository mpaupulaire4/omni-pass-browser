<script>
  import Header, { loading } from '../common/Header.svelte';
  import Input from '../common/Input.svelte';
  import Loading from '../common/Loading.svelte';
  import Auth from './Auth.svelte';
  import Generator from './Generator.svelte';

  export let masterKey;

  function setMasterKey(promise) {
    $loading = true
    $masterKey = promise.then((key) => {
      $masterKey = key
      $loading = false
    })
  }
</script>

<div class="m-px container">
  <Header />
  <div>
    {#if !$masterKey}
      <Auth callback="{setMasterKey}"/>
    {:else}
      <Generator masterKey="{$masterKey}" />
    {/if}
  </div>
</div>

<style>
	.container {
    width: 300px;
  }
</style>