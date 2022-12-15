const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');



function liveclock(){
	let date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	hour.textContent= hr;
	minute.textContent= min;
	second.textContent= sec;






}
setInterval(liveclock, 1000)
