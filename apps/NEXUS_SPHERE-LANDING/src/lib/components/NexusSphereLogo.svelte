<div class="logo-container">
	<div class="background"></div>
	<div class="logo">
		<div class="face front"></div>
		<div class="face back"></div>
		<div class="face right"></div>
		<div class="face left"></div>
		<div class="face top"></div>
		<div class="face bottom"></div>
	</div>
</div>

<style lang="postcss">
	.logo-container {
		position: static;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		margin-bottom: 10vh;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: blur(10px);
		background: url('../assets/logo.png');
		background-size: cover;
	}

	.logo {
		width: 300px;
		height: 300px;
		position: relative;
		transform-style: preserve-3d;
		transform-origin: center center;
		animation: rotate 10s linear infinite;
	}

	.face {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.8;
	}

	.front {
		background-color: #7b68ee;
		transform: translateZ(50px);
	}

	.back {
		background-color: #9370db;
		transform: rotateY(180deg) translateZ(50px);
	}

	.right {
		background-color: #e6e6fa;
		transform: rotateY(90deg) translateZ(50px);
	}

	.left {
		background-color: #d8bfd8;
		transform: rotateY(-90deg) translateZ(50px);
	}

	.top {
		background-color: #8a2be2;
		transform: rotateX(90deg) translateZ(50px);
	}

	.bottom {
		background-color: #4b0082;
		transform: rotateX(-90deg) translateZ(50px);
	}
	.blur {
		filter: blur(20px); /* Increase the blur intensity as needed */
		z-index: -1; /* Move the blurred logo behind other content */
	}

	@keyframes rotate {
		0% {
			transform: rotateX(0) rotateY(0);
		}
		100% {
			transform: rotateX(360deg) rotateY(360deg);
		}
	}
</style>
