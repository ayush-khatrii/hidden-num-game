const range = document.querySelector("#range");
const value = document.querySelector(".val");
range.disabled = true;
value.disabled = true;

// Range slider logic
value.textContent = range.value;
range.oninput = function () {
	value.textContent = this.value;
};

// Submit Button (Check if number is ==  hidden number h ke nahi)
let btn = document.getElementById("check");
btn.disabled = true;
btn.addEventListener("click", checkValid);

let chances = document.getElementById("counter");
let chance = 0;

//  Display CountDown Timer Logic
let random = Math.floor(Math.random() * 100) + 1;
btn.style.backgroundColor = "#808080";

// Start new game button logic
let startBtn = document.getElementById("newGAME");
startBtn.addEventListener("click", function gameStart() {
	alert(
		"Game started ! you will only get 30 seconds to guess the hidden number."
	);

	range.disabled = false;
	value.disabled = false;
	btn.style.backgroundColor = "#00aeff";

	btn.disabled = false;

	let timer = document.getElementById("time");
	let min = 0.5;
	let time = min * 60;

	setInterval(setTimer, 1000);

	function setTimer() {
		const minutes = Math.floor(time / 60);
		let seconds = time % 60;

		timer.innerText = `${minutes}:${seconds}`;
		time--;

		if (minutes == -1 && seconds == -1) {
			alert("time over");
			location.reload();
		}
	}
});

// FUNCTION TO CHECK SUBMIT BUTTON LOGIC

function checkValid() {
	chance++;
	chances.innerHTML = chance;

	if (value.textContent <= random) {
		less.style.display = "block";
		setTimeout(() => {
			less.style.display = "none";
		}, 1500);
	}

	if (value.textContent == random) {
		alert(" Congratulations you guessed it right 🥳");
		alert("The hidden number was " + random);
		location.reload();
	}

	if (value.textContent >= random) {
		chances.innerHTML = chance;

		greater.style.display = "block";
		setTimeout(() => {
			greater.style.display = "none";
		}, 1500);
	}
}
