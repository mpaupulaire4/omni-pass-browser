<script>
  import { slide, fade } from 'svelte/transition'
  import Header from '../common/Header.svelte';
  import Input from '../common/Input.svelte';
  import Loading from '../common/Loading.svelte';
  import { master, loading } from './stores';
  import Auth from './Auth.svelte';
  import Generator from './Generator.svelte';

  $loading = true
  master.init().then(() => {
    $loading = false
  })
</script>

<div class="m-px relative bg-gray-200 container">
  <Header remember="{master.remember()}"/>
  {#if !$master}
    <Auth />
  {:else}
    <Generator />
  {/if}
  {#if $loading}
    <div transition:slide="{{ duration: 200, delay: 400 }}" class="absolute inset-0 bg-gray-800 flex items-center justify-center">
      <div transition:fade="{{ duration: 400 }}" >
        <Loading class="h-8 text-white"/>
      </div>
    </div>
  {/if}
</div>

<style>
	.container {
    width: 300px;
  }
</style>