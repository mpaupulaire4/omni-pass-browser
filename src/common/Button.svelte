<script>
  export let disabled = false;
</script>


<button
  {disabled}
  class="bg-white uppercase hover:bg-gray-100 text-gray-700 py-1 px-4 border border-gray-400 rounded shadow focus:outline-none text-sm focus:shadow-outline"
  on:click
>
  <slot />
</button>
