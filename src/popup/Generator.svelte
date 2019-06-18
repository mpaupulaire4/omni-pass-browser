<script>
  import { fade } from 'svelte/transition';
  import Input from '../common/Input.svelte';
  import { loading } from '../common/Header.svelte';
  import Button from '../common/Button.svelte';
  import PassDisplay from '../common/PassDisplay.svelte';
  import { generateFromMasterKey } from 'omni-pass-core';

  export let masterKey;

  let site = ''
  let pass = ''

  async function submitHandler() {
    pass = ''
    $loading = true
    pass = await generateFromMasterKey(await masterKey, {
      context: site,
    })
    $loading = false
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
    <Button>
      Generate
    </Button>
  </div>
  {#if pass}
    <PassDisplay value="{pass}" />
  {/if}
</form>


<style>
.content > :global(div) {
  @apply mb-3;
}
</style>