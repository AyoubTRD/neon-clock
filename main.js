let now = new Date();

const hArrow = document.querySelector(".h")
const minArrow = document.querySelector(".min")
const secArrow = document.querySelector(".sec")


function render() {
	const h = (now.getHours() < 12 ? now.getHours() : now.getHours() - 12) + now.getMinutes() / 60
	const min = now.getMinutes() + now.getSeconds() / 60
	const sec = now.getSeconds()
	const hRotation = (h * 360 / 12) - 90
	const minRotation = (min * 360 / 60) - 90
	const secRotation = (sec * 360 / 60) - 90

	hArrow.style.transform = `rotate(${hRotation}deg)`
	minArrow.style.transform = `rotate(${minRotation}deg)`
	secArrow.style.transform = `rotate(${secRotation}deg)`

}

render()

setInterval(() => {
	now = new Date();
	render();	
}, 1000);