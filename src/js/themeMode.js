const componentTheme = document.querySelector(".componentTheme");
const ball = document.querySelector(".ball");

const isLightTheme = JSON.parse(localStorage.getItem("lightTheme")) || false;

if (isLightTheme) {
	ball.classList.add("ball--left");
	document.body.classList.add("lightMode");
} else {
	ball.classList.remove("ball--left");
	document.body.classList.remove("lightMode");
}

componentTheme.addEventListener("click", () => {
	const isLightTheme =
		JSON.parse(localStorage.getItem("lightTheme")) || false;

	if (isLightTheme) {
		ball.classList.remove("ball--left");
		document.body.classList.remove("lightMode");
		localStorage.setItem("lightTheme", false);
	} else {
		ball.classList.add("ball--left");
		document.body.classList.add("lightMode");
		localStorage.setItem("lightTheme", true);
	}
});
