<script>
  import Ionicon from './Ionicon.svelte'
  export let value = 'asdasdsadasdasdasdasdsadasdasdasdasdasdasdsa'
  let visible = false

  function copyToClipboard() {
    console.log('copy')
  }
</script>

<div class="bg-gray-200 flex items-center rounded-md p-1 pr-2 text-gray-700 leading-tight shadow">
  <Ionicon
    on:click="{() => visible = !visible}"
    icon="{visible ? 'eye' : 'eye-off'}"
    class="fill-current text-gray-500 w-5 h-full mr-1 cursor-pointer"
  />
  <span class="flex-1 overflow-hidden font-mono text-gray-600">
    {visible ? value : value.replace(/./g, '*')}
  </span>
  <Ionicon
    on:click="{copyToClipboard}"
    icon="copy"
    class="fill-current text-gray-500 w-5 h-full ml-1 cursor-pointer"
  />
</div>