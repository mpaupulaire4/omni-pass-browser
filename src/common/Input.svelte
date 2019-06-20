<script>
  import Ionicon from './Ionicon.svelte'

  export let type = 'text';
  export let value = '';
  export let name = '';
  export let placeholder = '';
  export let iconLeft = '';
  export let iconRight = '';
  export let autocomplete = '';
  export let readonly = false;

  let focused = false;
  let input;

  function changeHandler(e) {
    value = e.target.value
  }

  function focus() {
    if (focused) return
    focused = true
    input.focus()
  }
</script>


<div
  class="{`flex bg-white items-center shadow border-2 rounded-md leading-tight p-1 ${focused ? 'border-gray-700' : 'border-gray-500'}`}"
  tabindex="-1"
  on:focus="{focus}"
  on:click="{() => !focused && input.focus()}"
>
  {#if iconLeft}
    <Ionicon
      icon="{iconLeft}"
      class="{`w-5 mr-1 ${focused ? 'text-gray-700' : 'text-gray-500'}`}"
    />
  {/if}
  <input
    {type}
    {placeholder}
    {autocomplete}
    {readonly}
    {name}
    {value}
    class="appearance-none flex-1 text-gray-600 focus:outline-none font-sans leading-tight"
    on:focus="{() => focused = true}"
    on:blur="{() => focused = false}"
    bind:this="{input}"
    on:change="{changeHandler}"
  />
  {#if iconRight}
    <Ionicon
      icon="{iconRight}"
      class="{`w-5 ml-1 ${focused ? 'text-gray-700' : 'text-gray-500'}`}"
    />
  {/if}
</div>
