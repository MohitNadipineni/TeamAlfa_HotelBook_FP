

document.getElementById('login-btn').onclick = () => {
    let mail = document.getElementById('login-name').value;
    let pass = document.getElementById('login-pass').value;
    let request = window.indexedDB.open("hotels")
        , db, tx, store, index
        ;
    window.indexedDB = window.indexedDB || window.mozIndexedDB ||
        window.webkitIndexedDB || window.msIndexedDB;
    request.onupgradeneeded = (e) => {

    }

    request.onerror = (e) => {
        console.log('error is comming' + e.target.errorCode);
    }


   

}



