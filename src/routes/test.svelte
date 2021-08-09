<script>
	import { onMount } from 'svelte';
	let scrollConatiner;
	onMount(async () => {
		const locomotiveModule = await import('locomotive-scroll');

		scroll = new locomotiveModule.default({
			el: scrollConatiner,
			smooth: true,
			smartphone: { smooth: true }
		});
		scroll.on('scroll', (func) => {});
	});
</script>

<main bind:this={scrollConatiner}>
	<div class="test">
		<div id="hold" data-scroll-sticky data-scroll-target="#hold" class="holder">
			<img src="/img/1.jpg" alt="sv" />
		</div>
	</div>
</main>

<style>
	.test {
		margin-top: 50vh;
		height: 400vh;
	}
	.holder {
		height: 50vh;
		width: calc(50vh * 0.66);
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
