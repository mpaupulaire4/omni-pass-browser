<script>
  let className = ''
  export {
    className as class
  };
</script>

<svg viewBox="0 0 100 100" class="fill-current loader text-blue-500">
  <circle cx="12" cy="12" r="12" />
  <circle cx="12" cy="50" r="12" />
  <circle cx="12" cy="88" r="12" />
  <circle cx="50" cy="12" r="12" />
  <circle cx="50" cy="50" r="12" />
  <circle cx="50" cy="88" r="12" />
  <circle cx="88" cy="12" r="12" />
  <circle cx="88" cy="50" r="12" />
  <circle cx="88" cy="88" r="12" />
</svg>

<style>
.loader {
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  min-width: 50px;
  min-height: 50px;
}
.loader circle {
  border-radius: 100%;
  background: blue;
  animation: loader 1.2s linear infinite;
}
.loader circle:nth-child(1) {
  animation-delay: 0s;
}
.loader circle:nth-child(2) {
  animation-delay: -0.4s;
}
.loader circle:nth-child(3) {
  animation-delay: -0.8s;
}
.loader circle:nth-child(4) {
  animation-delay: -0.4s;
}
.loader circle:nth-child(5) {
  animation-delay: -0.8s;
}
.loader circle:nth-child(6) {
  animation-delay: -1.2s;
}
.loader circle:nth-child(7) {
  animation-delay: -0.8s;
}
.loader circle:nth-child(8) {
  animation-delay: -1.2s;
}
.loader circle:nth-child(9) {
  animation-delay: -1.6s;
}
@keyframes loader {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>