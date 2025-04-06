
const Calculate = () => {
    let dob = document.querySelector('#date').value;
    if (dob === '') {
        alert("You are required to Enter Details ");
        return;
    }

    dob = new Date(dob);
    let dobMonth = dob.getMonth();
    let dobYear = dob.getFullYear();

    const today = new Date();
    let todayMonth = today.getMonth();
    let todayYear = today.getFullYear();

    let finalYear = todayYear - dobYear;
    let finalMonth = todayMonth - dobMonth;



    if (todayMonth < dobMonth) {
        finalYear -= 1;
        finalMonth += 12;
    }

    const appendAge = document.querySelector('#age');
    appendAge.innerHTML = (`You are ${finalYear} years and ${finalMonth} months old`);
    document.querySelector('#date').value = '';
} 