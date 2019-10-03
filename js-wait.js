let timer = 50000;

function runTimer(timeLeft){
	while(timeLeft > 0){
		console.log(timeLeft);
		timeLeft -= 1000;
	}
}

const timesUp = new Promise((resolve, reject) => {
	if(timer === 0){
		console.log("time is up yo");
		resolve();
	}
}
