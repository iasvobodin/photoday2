<script>
	import '../app.css';
	import '../fonts.css';
	import '../loco.css';
	import { onMount } from 'svelte';
	import anime from 'animejs';
	let rot, scrollConatiner;
	onMount(async () => {
		const locomotiveModule = await import('locomotive-scroll');

		rot = anime({
			targets: '.title__background',
			scale: [3, 1],
			// translateX: '50%',
			// rotate: 180,
			easing: 'linear',
			autoplay: false
		});
		// console.log(rot);
		scroll = new locomotiveModule.default({
			el: scrollConatiner,
			smooth: true
			// smoothMobile: false
		});
		scroll.on('scroll', (func) => {
			// Get all current elements : func.currentElements
			if (typeof func.currentElements['hey'] === 'object') {
				let progress = func.currentElements['hey'].progress;
				console.log(progress);
				rot.seek(progress * 1000);
				// ouput log example: 0.34
				// gsap example : myGsapAnimation.progress(progress);
			}
		});
	});
</script>

<main bind:this={scrollConatiner}>
	<section class="decription">
		<div class="title">
			<h1 class="title__hedline">
				<span>Фотопроект</span>
				<span>"Ничего лишнего"</span>
			</h1>
		</div>
		<div class="holder__bg">
			<div
				data-scroll-speed="6"
				data-scroll
				data-scroll-sticky
				data-scroll-target="#hold"
				class="imghold"
			>
				<img class="title__background" alt="SvobodinaPhoto" src="/img/1.jpg" />
			</div>
			<div id="hold" class="stick__triger" />
			<div data-scroll data-scroll-id="hey" class="anim__triger" />

			<div class="gap" />
			<!-- <div data-scroll data-scroll-id="hey" class="trigger" /> -->
		</div>
	</section>
</main>

<style>
	.imghold {
		display: grid;
		height: auto;
	}
	.anim__triger {
		position: absolute;
		height: 100vh;
		width: 5px;
		right: 150px;
		top: 100vh;
		border: 1px solid green;
	}
	.gap {
		height: 100vh;
	}
	.title__background {
		z-index: -1;
		place-self: end;
		/* position: absolute; */
		transform-origin: 100% 0%;
		right: 0px;
	}
	.holder__bg {
		/* margin-top: -100vh; */
		position: relative;
		height: 400vh;
	}
	.stick__triger {
		position: absolute;
		height: 300vh;
		width: 5px;
		right: 50px;
		top: 0;
		border: 1px solid red;
	}
	.title {
		height: 100vh;
		display: grid;
	}
	.title__hedline {
		z-index: 2;
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
		height: 100vh;
	}
	.decription {
		position: relative;
	}
</style>
