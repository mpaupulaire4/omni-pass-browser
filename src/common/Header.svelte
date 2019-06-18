<script context="module">
  import { writable } from 'svelte/store';

  export const loading = writable(false);
</script>

<script>
  import Loading from './Loading.svelte'
</script>

<span class="flex items-center bg-gray-600 shadow text-white py-1 px-3 z-10">
  <span class="flex-1">OmniPass</span>
  {#if $loading}
    <div>
      <Loading class="h-4"/>
    </div>
  {/if}
</span>