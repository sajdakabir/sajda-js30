let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer (seconds) {
	clearInterval(countdown);
	const now = Date.now()
	const then = now + (seconds * 1000);
	displayEndTime(then);
	displayTimeLeft(seconds);
	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now())  /1000);
		if(secondsLeft < 0){
			clearInterval(countdown);
			return;
		}
		displayTimeLeft(secondsLeft)
	}, 1000)
}

function displayTimeLeft (seconds) {
	const hours = Math.floor(seconds / 3600);
	seconds %= 3600
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${hours}:${minutes < 10 ? '0': ''}${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`;
	timerDisplay.textContent = display;
	document.title = display;
}

function displayEndTime (timestamp){
	const end = new Date(timestamp);
	const hour = end.getHours();
	const adjustedHour = hour > 12 ? hour - 12 : hour; 
	const minutes = end.getMinutes();
	endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`
}
function startTimer () {
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins*60);
	this.reset();
})