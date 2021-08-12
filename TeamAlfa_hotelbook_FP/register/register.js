
let terms = document.getElementById('reg-read');
if (terms.checked == false) {
    document.getElementById('reg-btn').disabled = true
    console.log(2);

}
terms.onclick = () => {
    if (terms.checked == false) {
        document.getElementById('reg-btn').disabled = true;

        console.log(2);

    }
    if (terms.checked == true) {
        document.getElementById('reg-btn').disabled = false;
        console.log(1);

    }
}


