let timer = 50000;

function runTimer(timeLeft){
	while(timeLeft > 0){
		console.log(timeLeft);
		timeLeft -= 1000;
	}
}

runTimer(timer);

const timesUp = new Promise((resolve, reject) => {
	if(timer === 0){
		resolve("beep");
	}
});

timesUp.then(function(resolve){
	console.log("time is up yo" + resolve);
}, function(error) {
	console.error("Failed!", error);
});