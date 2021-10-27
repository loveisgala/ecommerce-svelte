<script>
  import CartButton from '../Cart/CartButton.svelte';
  import { link } from 'svelte-routing';
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <p class="nav-links"></p>
      <a href="/" use:link class="nav-logo big-logo">
        <img src="/assets/images/logo.svg" class="logo" alt="logo">
      </a>
      <div class="nav-aside">
        <CartButton/>
      </div>
    </div>
  </div>
</nav>