const URL = "https://api.adviceslip.com/advice";

const randBtn = document.querySelector("#rand-btn");
const advice = document.querySelector("#advice");
const adviceNum = document.querySelector("#advice-num");
const dice = document.querySelector("#dice");
const loader = document.querySelector(".loader");

getAdvice();

function getAdvice() {
	fetch(URL)
		.then((response) => response.json())
		.then((json) => renderAdvice(json))
		.catch((e) => console.log(e));
}

function renderAdvice(data) {
	if (data?.slip?.advice !== undefined) {
		advice.textContent = `"${data?.slip?.advice}"`;
	} else {
		advice.textContent = `Error`;
	}
	if (data?.slip?.id !== undefined) {
		adviceNum.textContent = `advice #${data?.slip?.id}`;
	} else {
		adviceNum.textContent = `Error`;
	}
	dice.style.display = "block";
	loader.classList.remove("active");
    return;
}

randBtn.addEventListener("click", () => {
    loader.classList.add("active");
	dice.style.display = "none";
	getAdvice();
});
