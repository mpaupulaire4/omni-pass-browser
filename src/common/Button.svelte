<script>
  export let disabled = false;
</script>


<button
  {disabled}
  class="bg-gray-800 uppercase hover:bg-gray-700 text-gray-100 py-1 px-4 rounded shadow focus:outline-none text-sm focus:shadow-outline"
  on:click
>
  <slot />
</button>
