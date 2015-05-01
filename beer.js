window.onload = function () {
	setInterval(function () {
		var date = new Date;
		date.getTime();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();

		if (hour == "16" && minute >= 30 && date.getDay() === 5)
		{
			document.querySelector('#message').textContent = "YES";
      		document.querySelector('#world').style.display = 'block';
      		document.querySelector('#pic').src = "dance.gif";
      	}
	}, 1000);
};
