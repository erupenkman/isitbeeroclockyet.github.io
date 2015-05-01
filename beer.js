function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}


window.onload = function () {
		var date = new Date;
		date.getTime();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		if (hour == "16" && minute >= 30 && date.getDay() === 5)
		{
			document.querySelector('#message').textContent = "YES";
      		document.querySelector('#world').style.display = 'block';
      	}
	}
};
