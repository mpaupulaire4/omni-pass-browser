import popup from './popup.svelte'
import './popup.css'

chrome.storage.sync.get('color', function(data) {
  const app = new popup({
    target: document.body,
    props: {
      name: data.color
    }
  });
});


export default app;