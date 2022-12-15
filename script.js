const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const porgress =document.getElementById('progerssbar');


function liveclock(){
	let date = new Date();
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	hour.textContent= hr;
	minute.textContent= min;
	second.textContent= sec;

	porgressbar.style.width=(sec / 60) * 100 + '%' ;




}
setInterval(liveclock, 1000)