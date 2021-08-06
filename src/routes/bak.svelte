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
		<div class="desc decription__first">
			<div class="description__holder first">
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
				<div class="description__title">
					<h2>Фотографии на белом фоне,</h2>
				</div>
			</div>
			<div class="description__holder" />
			<!-- <div class="description__holder" /> -->
		</div>
		<div class="desc decription__second">
			<div class="description__holder" />
			<div class="description__holder">
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
				<div class="description__title">
					<h2>где главный герой Вы,</h2>
				</div>
			</div>
			<div class="description__holder" />
		</div>
		<div class="desc decription__third">
			<div class="description__holder" />
			<div class="description__holder" />
			<div class="description__holder">
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
				<div class="description__title">
					<h2>а не интерьер студии.</h2>
				</div>
			</div>
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
	.description__title {
		width: min(800px, 60vw);
		place-self: center;
	}
	.description__title > h2 {
		font-size: max(20px, 4vw);
	}
	img {
		width: 100%;
	}
	.desc {
		/* height: 100vh; */
		/* width: 90vw;
		margin: 0 auto;
		display: grid;
		grid-auto-flow: column; */
	}
	.first {
		position: sticky;
		top: 0;
	}
	.description__holder {
		height: 100vh;
		width: 90vw;
		margin: 0 auto;
		display: grid;
		grid-auto-flow: column;
	}
</style>
