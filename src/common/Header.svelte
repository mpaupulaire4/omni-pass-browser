<script>
  import { fly } from 'svelte/transition'
  import { master } from '../popup/stores'
  import Ionicon from './Ionicon.svelte'

  let open = false
  export let remember = master.remember()
  export let save = false
  export let cloud = false

  function toggleRemeber() {
    remember = master.remember(!remember)
  }
  function toggleOpen() {
    open = !open
  }
  function toggleSave() {
    save = !save
  }
  function toggleCloud() {
    cloud = !cloud
  }
</script>

<span class="flex items-center bg-gray-800 shadow text-white py-1 px-3 z-10">
  <span class="flex-1 flex flex-row items-center">
    OmniPass
  </span>
  <div class="flex">
    {#if open}
      <span
        in:fly="{{x: 30, delay: 200}}"
        out:fly="{{x: 30, delay: 100}}"
        on:click="{toggleCloud}"
        class="mx-1"
      >
        <Ionicon icon="cloud-done" class="{`w-5 cursor-pointer ${!cloud ? 'text-gray-500' : ''}`}"/>
      </span>
      <span
        in:fly="{{x: 30, delay: 100}}"
        out:fly="{{x: 30, delay: 200}}"
        on:click="{toggleSave}"
        class="mx-1"
      >
        <Ionicon icon="save" class="{`w-5 cursor-pointer ${!save ? 'text-gray-500' : ''}`}"/>
      </span>
      <span
        in:fly="{{x: 30}}"
        out:fly="{{x: 30, delay: 300}}"
        on:click="{toggleRemeber}"
        class="mx-1"
      >
        <Ionicon icon="{remember ? 'heart' : 'heart-cross'}" class="{`w-5 cursor-pointer ${!remember ? 'text-gray-500' : ''}`}"/>
      </span>
    {/if}
    <Ionicon icon="more" class="w-5 -mr-2 cursor-pointer" on:click="{toggleOpen}"/>
  </div>
</span>