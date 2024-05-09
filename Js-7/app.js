

function countdown() {
    setInterval (function() {

    let dest = new Date("june 17, 2024, 00:00:00").getTime();
    let cur = new Date().getTime();
    let diff = dest - cur;

    let days = Math.floor(diff / (1000*60*60*24));
    console.log(days);

    let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
    console.log(hours);

    let minutes = Math.floor(diff % (1000*60*60) / (1000*60));
    console.log(minutes);

    let seconds = Math.floor(diff % (1000*60) / (1000));
    console.log(seconds);

    // document.getElementById("month").innerHTML = month + "</br>" + "Month";
    document.getElementById("days").innerHTML = days + "<br/>" + "Days";
    document.getElementById("hours").innerHTML = hours + "<br/>" + "Hours";
    document.getElementById("minutes").innerHTML = minutes + "<br/>" + "Minutes";
    document.getElementById("seconds").innerHTML = seconds + "<br/>" + "Seconds";

    
    
},1000)
}

countdown();































