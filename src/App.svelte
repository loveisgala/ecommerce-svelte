<script>
	import { Router, Route, Link } from 'svelte-routing';
	import Login from './pages/Login.svelte';
	import Checkout from './pages/Checkout.svelte';
	import ProductTemplate from './pages/ProductTemplate.svelte';
	import Products from './pages/Products.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import Navbar from './components/Navbar/Navbar.svelte';

</script>

<Router>
	<Navbar/>
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/products" component={Products} />
	<Route path="/products/:id" component={ProductTemplate} />
</Router>