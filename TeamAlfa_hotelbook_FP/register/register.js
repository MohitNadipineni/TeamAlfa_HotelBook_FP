
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
document.getElementById('reg-btn').onclick = () => {
    let mail = document.getElementById('reg-mail').value;
    let url = document.getElementById('reg-url').value;
    let date = document.getElementById('reg-date').value;
    let pass = document.getElementById('reg-pass').value;
    let pass2 = document.getElementById('reg-pass2').value;
    let comment = document.getElementById('reg-comment').value;


    if (mail == "" || url == "" || date == "" || pass == "" || pass2 == "" || comment == "") {
        cont = false;
        alert("please fill all fields");
        return;
    }

    if (pass != pass2) {
        cont = false;
        document.getElementById('valid-pass').innerHTML = "*password do not match"
        return;
    }
    else if (pass == pass2) {
        document.getElementById('valid-pass').innerHTML = ""
    }
    if (pass.length < 7) {
        alert("please enter pass of length greater than 6");
        cont = false;
        return;
    }

    ValidateEmail(mail);

    if (mail != "" && url != "" && date != "" && pass != "" && pass2 != "" && comment != "" && pass == pass2 && ValidateEmail(mail) == true && pass > 6) {
        cont = true;
    }


    if (cont == true) {

        let val = {
            mail: mail, url: url, date: date, pass: pass, comment: comment, gender: $("input[type='radio'][name='gender']:checked").val()
        }


        add(val);

    }


}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

