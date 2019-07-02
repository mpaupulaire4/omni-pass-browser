<script>
  import { generateFromMasterKey } from 'omni-pass-core';
  import { fade, slide } from 'svelte/transition'
  import { Input } from 'omni-pass-ui';
  import { Counter } from 'omni-pass-ui';
  import { Button } from 'omni-pass-ui';
  import { PassDisplay } from 'omni-pass-ui';
  import { master, hostname } from './stores';

  let site = $hostname || ''
  let name = 'password'
  let counter = 1
  let length = 16
  let pass = ''
  let loading = false
  let options = false
  let required = ''

  async function submitHandler() {
    if (loading) return
    loading = true
    pass = await generateFromMasterKey($master, {
      context: site,
      counter,
      length,
      required
    })
    loading = false
  }
</script>

<form
  class="content flex-1 p-3"
  on:submit|preventDefault|stopPropagation="{submitHandler}"
  autocomplete="off"
>
  <Input
    placeholder="Site"
    iconLeft="globe"
    bind:value={site}
  />
  <div class="flex justify-end items-center">
    <span class="text-gray-800 text-xs">
      <Counter bind:counter min="{1}" label="counter"/>
      <Counter bind:counter="{length}" min="{Math.max(required.length, 1)}" label="length"/>
    </span>
    <span class="flex-1">
    </span>
    <Button disabled="{loading}" >
      Generate
    </Button>
  </div>
  <!-- {#if options}
    <div transition:slide="{{}}">
      <Input
        placeholder="What's being generated?"
        iconLeft="globe"
        bind:value={name}
      />
    </div>
  {/if} -->
  <PassDisplay value="{pass}" />
</form>


<style>
.content > :global(div:not(:last-child)) {
  @apply mb-3;
}
</style>