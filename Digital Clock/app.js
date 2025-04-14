const display = () => {
    let final = document.querySelector('#finalTime');

    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }

    let finalTime = (`${hour} : ${minute} : ${second}`)

    if (hour >= 12) {
        finalTime = (`${finalTime} PM `)
    }
    else {
        finalTime = (`${finalTime} AM `)
    }

    final.innerHTML = finalTime;

}

const startClock = () => {
    display();
    let button = document.querySelector('.button');
    button.remove();
    setInterval(display, 1000);

}
