import popup from './popup.svelte'
import './popup.css'

const app = new popup({
  target: document.body,
  props: {
    masterKey: ''
  }
});

// console.log(calculateEntropy([1,2,3,4], { context: 'some.site' }))

export default app;