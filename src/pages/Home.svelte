<script>
  import Hero from "../components/Hero.svelte";
  import { Link } from "svelte-routing";
  import Featured from "../components/Products/Featured.svelte";
</script>

<Hero>
  <Link to="/products" class="btn btn-primary btn-hero">shop now</Link>
</Hero>

<Featured title="featured products"/>
