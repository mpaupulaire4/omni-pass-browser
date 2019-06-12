import popup from './popup.svelte'
// import { calculateEntropy } from 'omni-pass-core'
import './popup.css'

const app = new popup({
  target: document.body,
});

// console.log(generate('username', 'password', { context: 'some.site.com' }))
// console.log(calculateEntropy([1,2,3,4], { context: 'some.site' }))

export default app;