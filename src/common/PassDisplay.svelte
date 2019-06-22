<script>
  import Ionicon from './Ionicon.svelte'
  export let value = ''
  let visible = false
  let hidden = null

  function copyToClipboard() {
    hidden.select()
    document.execCommand("copy");
  }
</script>

<div class="bg-gray-700 flex items-center rounded-md py-1 px-2 text-gray-700 leading-tight shadow">
  <button
    class="focus:outline-none border border-gray-700 focus:border-gray-200 mr-1"
    on:click="{() => visible = !visible}"
  >
    <Ionicon
      icon="{visible ? 'eye' : 'eye-off'}"
      class="fill-current text-gray-300 w-5 h-full cursor-pointer"
    />
  </button>
  <span class="flex-1 overflow-hidden font-mono text-gray-300">
    {visible ? value : value.replace(/./g, '*')}
  </span>
  <button
    class="focus:outline-none border border-gray-700 focus:border-gray-200 ml-1"
  >
    <Ionicon
      on:click="{copyToClipboard}"
      icon="copy"
      class="fill-current text-gray-300 w-5 h-full cursor-pointer"
    />
  </button>
  <input tabindex="-1" bind:this="{hidden}" type="text" class="absolute" bind:value />
</div>

<style>
input {z-index: -10;}
</style>