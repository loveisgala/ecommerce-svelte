import { writable, derived } from 'svelte/store';
import localProducts from '../localProducts';

const store = writable(flattenProducts([...localProducts]));

//flatten products
function flattenProducts(data) {
  return data.map((item) => {
    let image = item.image.url;
    return {...item, image};
  })
}

//featured store
export const featuredStore = derived(store, ($featured) => {
  return $featured.filter((item) => item.featured);
});

export default store;