<script>
  export let title = '';
  import products from '../../stores/defaultProducts';
  import Product from './Product.svelte';
  import Loading from '../Loading.svelte';

  $: featured = $products.filter((p) => p.featured); 
</script>


{#if !featured.length}
  <Loading/>
{:else}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
      {#each featured as product (product.id)}
        <Product {product}/>
      {:else}
        <Loading/>
      {/each}
    </div>
  </section>
{/if}