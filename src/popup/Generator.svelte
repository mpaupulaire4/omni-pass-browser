<script>
  import { generateFromMasterKey } from 'omni-pass-core';
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';
  import PassDisplay from '../common/PassDisplay.svelte';
  import { master, hostname } from './stores';

  let site = $hostname || ''
  let pass = ''
  let loading = false

  async function submitHandler() {
    if (loading) return
    loading = true
    pass = await generateFromMasterKey($master, {
      context: site,
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
    name="site"
    bind:value={site}
  />
  <div class="flex justify-end">
    <Button disabled="{loading}" >
      Generate
    </Button>
  </div>
  {#if !loading && pass}
    <PassDisplay value="{pass}" />
  {/if}
</form>


<style>
.content > :global(div:not(:last-child)) {
  @apply mb-3;
}
</style>