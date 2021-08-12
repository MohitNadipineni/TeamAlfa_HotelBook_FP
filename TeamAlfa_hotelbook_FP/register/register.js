
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


let cont = true;
document.getElementById('clear-btn').onclick = () => {
    document.getElementById('reg-mail').value = "";
    document.getElementById('reg-url').value = "";
    document.getElementById('reg-date').value = "";
    document.getElementById('reg-pass').value = "";
    document.getElementById('reg-pass2').value = "";
    document.getElementById('reg-comment').value = "";
}
