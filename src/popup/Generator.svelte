<script>
  import Input from '../common/Input.svelte';
  import Button from '../common/Button.svelte';
  import { generateFromMasterKey } from 'omni-pass-core'
  export let masterKey;
  let site = ''
  let pass = ''
  async function submitHandler() {
    pass = await generateFromMasterKey(masterKey, {
      context: site,
    })
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
  <Input
    readonly="true"
    name="password"
    iconLeft="eye"
    value={pass}
    iconRight="copy"
  />
  <div class="flex justify-end">
    <Button>
      Generate
    </Button>
  </div>
</form>


<style>
.content > :global(div) {
  @apply mb-3;
}
</style>