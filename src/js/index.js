//* Countdown timer selectors
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`November 10 ${currentYear} 00:00:00`);

//* Countdown timer function
const updateCountDownTimer = () => {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	days.innerHTML = d < 10 ? "0" + d : d;
	hours.innerHTML = h < 10 ? "0" + h : h;
	minutes.innerHTML = m < 10 ? "0" + m : m;
	seconds.innerHTML = s < 10 ? "0" + s : s;
};

setInterval(updateCountDownTimer, 1000);

//* Burger
const burger = document.querySelector(".nav__burger");
const burgerMenu = document.querySelector(".nav__list");

burger.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
});

