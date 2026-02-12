<script>
    let { data } = $props();
  </script>
  
  <ul>
    {#each data.products as product}
        <img src="{product.product_image_1}" height="200px">
        <li>{product.product_name}</li>
    {/each}
  </ul>