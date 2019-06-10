<script>
  import Ionicon, { IconPaths } from './Ionicon.svelte'
  export let type = 'text';
  export let value = '';
  export let name = '';
  export let placeholder;
  export let iconLeft = '';
  export let iconRight = '';
  let focused = false;
  let input;
</script>


<div
  class="flex item-center shadow border rounded-md leading-tight p-1"
  on:click="{() => input.focus()}"
  class:border-blue-500="{focused}"
>
  {#if iconLeft}
    <Ionicon
      icon="{iconLeft}"
      class="{`fill-current text-gray-500 w-5 h-full mr-1 ${focused ? 'text-blue-500' : ''}`}"
    />
  {/if}
  <input
    {type}
    {placeholder}
    {name}
    class="appearance-none flex-1 text-gray-600 focus:outline-none font-sans leading-tight"
    on:focus="{() => focused = true}"
    on:blur="{() => focused = false}"
    bind:this="{input}"
    bind:value
  />
  {#if iconRight}
    <Ionicon
      icon="{iconRight}"
      class="{`fill-current text-gray-500 w-5 h-full ml-1 ${focused ? 'text-blue-500' : ''}`}"
    />
  {/if}
</div>
