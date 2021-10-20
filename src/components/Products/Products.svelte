<script>
  export let title = '';
  import products from '../../stores/defaultProducts';
  import Product from './Product.svelte';
</script>


<section>
  <h2 class="section-title">{title}</h2>
  <div class="products-center">
    {#each $products as product (product.id)}
      <Product {product}/>
    {/each}
  </div>
</section>
