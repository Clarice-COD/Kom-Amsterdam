<script>
    let { data } = $props();
  </script>
  
  <ul>
    {#each data.products as product}
      <li>{product.product_name}</li>
    {/each}
  </ul>