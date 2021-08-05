<script>
	import '../app.css';
	import '../fonts.css';
	import { onMount } from 'svelte';
	import anime from 'animejs';
	let rot, scrollConatiner;
	onMount(async () => {
		const locomotiveModule = await import('locomotive-scroll');

		rot = anime({
			targets: '.test',
			translateX: 1000,
			rotate: 180,
			easing: 'linear',
			autoplay: false
		});

		scroll = new locomotiveModule.default({
			// el: scrollConatiner,
			smooth: true
			// smoothMobile: false,
		});

		scroll.on('scroll', (func) => {
			// Get all current elements : func.currentElements
			if (typeof func.currentElements['hey'] === 'object') {
				// let progress = func.currentElements['hey'].progress;
				// // console.log(progress);
				// rot.seek((progress / 2) * 1000);
				// ouput log example: 0.34
				// gsap example : myGsapAnimation.progress(progress);
			}
		});
	});
</script>

<main>
	<section class="decription">
		<div class="title">
			<h1 class="title__hedline">
				<span>Фотопроект</span>
				<span>"Ничего лишнего"</span>
			</h1>
		</div>
		<div class="decription__first">
			<picture class="decription__image">
				<!-- <source srcset="/img/1.webp" type="image/webp" /> -->
				<img
					alt="SvobodinaPhoto"
					crossorigin="anonimous"
					decoding="async"
					draggable="false"
					src="/img/1.jpg"
				/>
			</picture>
			<div class="description__title">a</div>
		</div>
		<div class="decription__second">
			<picture class="decription__image">
				<source srcset="" type="image/webp" />
				<img
					alt="SvobodinaPhoto"
					crossorigin="anonimous"
					decoding="async"
					draggable="false"
					src="/img/2.jpg"
				/>
			</picture>
			<div class="description__title">a</div>
		</div>
		<div class="decription__third">
			<picture class="decription__image">
				<source srcset="/img/3.webp" type="image/webp" />
				<img
					alt="SvobodinaPhoto"
					crossorigin="anonimous"
					decoding="async"
					draggable="false"
					src=""
				/>
			</picture>
			<div class="description__title">a</div>
		</div>
	</section>
	<section class="tenats">
		<div class="tenats__first">a</div>
		<div class="tenats__second">a</div>
		<div class="tenats__third">a</div>
	</section>
	<section class="price">
		<div class="price__first">a</div>
		<div class="price__second">a</div>
		<div class="price__third">a</div>
	</section>
	<section class="gallery" />
	<section class="form" />
</main>

<style>
	.title {
		height: 100vh;
		display: grid;
	}
	.title__hedline {
		width: 90%;
		place-self: center;
		font-size: max(36px, 10.8vw);
	}
	.title__hedline > span {
		display: block;
		width: 100%;
	}
	.title__hedline > span:first-child {
		text-align: left;
	}
	.title__hedline > span:last-child {
		text-align: right;
	}
	img {
		width: 70%;
	}
</style>
