import { writable } from 'svelte/store';
import popup from './popup.svelte'
import './popup.css'

const masterKey = writable('');

const app = new popup({
  target: document.body,
  props: {
    masterKey
  }
});

// console.log(calculateEntropy([1,2,3,4], { context: 'some.site' }))

export default app;