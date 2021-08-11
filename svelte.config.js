/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: false
	}
};

export default config;
