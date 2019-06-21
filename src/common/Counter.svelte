<script>
  import Ionicon from './Ionicon.svelte'

  export let counter = 1
  export let label = null
  export let min = null
  export let max = null

  function incrememt() {
    if (max && counter === max) return
    counter++
  }
  function decrement() {
    if (min && counter === min) return
    counter--
  }
</script>

<span class="bg-gray-800 text-xs shadow inline-flex flex-col rounded items-center justify-center border border-gray-800 font-mono">
  {#if label}
    <span class="text-gray-100 bg-gray-800 text-2xs">{label}</span>
  {/if}
  <span class="flex items-center justify-center">
    <button
      class="p-1 cursor-pointer focus:outline-none focus:shadow-outline"
      on:click|stopPropagation="{decrement}"
    >
      <Ionicon icon="minus" class="w-3 h-3 text-gray-100 leading-tight"/>
    </button>
    <span class="px-1 bg-white">{counter}</span>
    <button
      class="p-1 cursor-pointer focus:outline-none focus:shadow-outline"
      on:click|stopPropagation="{incrememt}"
    >
      <Ionicon icon="plus" class="w-3 h-3 text-gray-100"/>
    </button>
  </span>
</span>

<style>
  .text-2xs {
    font-size: .6rem;
  }
</style>