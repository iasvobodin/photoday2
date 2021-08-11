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
			easing: 'linear',
			autoplay: false,
			complete: (anim) => {
				console.log(anim);
			}
		});
		const words = anime({
			targets: '.letters',
			opacity: { value: 0, duration: 100 },
			translateY: { value: '-100vh' }, //, delay: 800, duration: 200 },
			delay: anime.stagger(40, { start: 400 }),
			easing: 'linear',
			autoplay: false
		});
		// console.log(rot);
		scroll = new locomotiveModule.default({
			el: scrollConatiner,
			smooth: true,
			smartphone: { smooth: true }
		});
		scroll.on('scroll', (func) => {
			// Get all current elements : func.currentElements
			if (typeof func.currentElements['hey'] === 'object') {
				let progress = func.currentElements['hey'].progress;
				// console.log(progress);
				rot.seek(progress * 1000);
				words.seek(progress * 3000);
				// ouput log example: 0.34
				// gsap example : myGsapAnimation.progress(progress);
			}
		});
	});
</script>

<main bind:this={scrollConatiner}>
	<section data-scroll-section class="decription">
		<div class="holder__bg">
			<div
				data-scroll-speed="6"
				data-scroll
				data-scroll-sticky
				data-scroll-target="#hold"
				class="imghold"
			>
				<div class="title">
					<h1 class="title__hedline">
						{#each 'Фотопроект' as item}
							<span class="letters">{item}</span>
						{/each}
						<br />{#each '"Ничего' as item}
							<span class="letters">{item}</span>
						{/each}
						{#each 'лишнего"' as item}
							<span class="letters">{item}</span>
						{/each}
					</h1>
				</div>
				<div class="title__background">
					<img alt="SvobodinaPhoto" src="/img/1.jpg" />
				</div>
				<!-- <div class="gap" /> -->
			</div>
			<div class="description__title">
				<h2>Фотографии на белом фоне,</h2>
			</div>
			<div id="hold" class="stick__triger" />
			<div data-scroll data-scroll-id="hey" class="anim__triger__step1" />
			<div data-scroll data-scroll-id="step2" class="anim__triger__step2" />

			<!-- <div data-scroll data-scroll-id="hey" class="trigger" /> -->
		</div>
	</section>
</main>
<a href="/gsap">gsap</a>

<style>
	.letters {
		display: inline-block;
		white-space: break-spaces;
	}
	.imghold {
		display: grid;
		height: auto;
	}
	.stick__triger {
		position: absolute;
		height: 400vh;
		width: 1px;
		right: 0px;
		top: 0;
		border: 3px solid red;
	}
	.anim__triger__step1 {
		position: absolute;
		height: 100vh;
		width: 1px;
		right: 6px;
		top: 100vh;
		border: 3px solid green;
	}
	.anim__triger__step2 {
		position: absolute;
		height: 100vh;
		width: 1px;
		right: 9px;
		top: 200vh;
		border: 3px solid blue;
	}
	.description__title {
		position: absolute;
		top: 250vh;
		left: 10vh;
		font-size: min(36px, 8vw);
	}
	.gap {
		height: 100vh;
	}
	.title__background {
		transform-origin: 100% 0%;
		transform: scale(6);
		z-index: -1;
		justify-self: end;
		align-self: center;
		height: 100vh;
		width: 80vw;
	}
	.holder__bg {
		/* margin-top: -100vh; */
		position: relative;
		height: 400vh;
	}

	.title {
		position: absolute;
		/* transform: translateY(-100%); */
		height: 100vh;
		width: 100%;
		display: grid;
	}
	.title__hedline {
		z-index: 2;
		width: 90%;
		place-self: center;
		font-size: max(36px, 10.8vw);
	}
	.title__hedline > span {
		/* display: block; */
		/* width: 100%; */
	}
	/* .title__hedline > span:first-child {
		text-align: left;
	}
	.title__hedline > span:last-child {
		text-align: right;
	} */
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: 100% 0%;
	}
	.decription {
		position: relative;
	}
</style>
