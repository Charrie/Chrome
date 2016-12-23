function time(t)
{
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDay();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    month = (month>=10?month:('0'+month));
    day = (day>=10?day:('0'+day));
    m = (m>=10?m:('0'+m));
    s = (s>=10?s:('0'+s));

    t.innerHTML = year+"-"+month+"-"+day+"<br/>"+h+"-"+m+"-"+s;
    setTimeout(function(){time(t)}, 1000);

}

var time_div = document.getElementById('time_div');
time(time_div);