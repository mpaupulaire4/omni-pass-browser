<script>
  import { slide, fade } from 'svelte/transition'
  import Header from '../common/Header.svelte';
  import { Input } from 'omni-pass-ui';
  import { Loading } from 'omni-pass-ui';
  import { master, loading } from './stores';
  import Auth from './Auth.svelte';
  import Generator from './Generator.svelte';

  $loading = true
  master.init().then(() => {
    $loading = false
  })
</script>

<div class="relative bg-gradient container shadow rounded">
  <Header remember="{master.remember()}"/>
  {#if !$master}
    <div transition:fade>
      <Auth />
    </div>
  {:else}
    <div transition:fade>
      <Generator />
    </div>
  {/if}
  {#if $loading}
    <div transition:fade="{{ duration: 200, delay: 400 }}" class="absolute inset-0 bg-gradient flex items-center justify-center rounded">
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