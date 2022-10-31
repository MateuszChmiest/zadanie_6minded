//* Countdown timer selectors
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`November 20 ${currentYear} 00:00:00`);

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
const navList = document.querySelectorAll(".nav__list--item");

burger.addEventListener("click", () => {
	burgerMenu.classList.toggle("active");
	navList.forEach((e) => e.classList.toggle("active"));
});

navList.forEach((el) => {
	el.addEventListener('click', () => {
		burgerMenu.classList.toggle("active");
		navList.forEach((e) => e.classList.toggle("active"));
	})
})

//* Animated sections
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const showElements = document.querySelectorAll(".offer__section--box");
showElements.forEach((el) => observer.observe(el));

//* Scroll function
const bannerButton = document.querySelector(".btn__banner");
const navLink = document.querySelector(".nav__menu--link");
const timerButton = document.querySelector(".btn__timer");
const contact = document.getElementById("contact");

bannerButton.addEventListener("click", () => {
	contact.scrollIntoView();
});
navLink.addEventListener("click", () => {
	contact.scrollIntoView();
});
timerButton.addEventListener("click", () => {
	contact.scrollIntoView();
});

//* Form validation
const email = document.getElementById('email');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const company = document.getElementById('company');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
	let status = [];

	if (!email.value || email.value === null) {
		status.push("Enter your email");
	}
	if (!firstName.value || firstName.value === null) {
		status.push("First name is required");
	}
	if (!lastName.value || lastName.value === null) {
		status.push("Last name is required");
	}
	if (!company.value || company.value === null) {
		status.push("Company name is required")
	}

	if (status.length > 0) {
		e.preventDefault();
		errorElement.innerText = status.join(', ');
	}
})