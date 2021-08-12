window.onload = () => {
    if(localStorage.getItem("login")=="true"){
        document.getElementById("logout").innerHTML="Log out"
    }
    else{
        document.getElementById("logout").innerHTML="Login"

    }
}



document.getElementById('search-btn').onclick = () => {
    let val = document.getElementById('search').value;
    localStorage.setItem("search", val);
    window.location = '../hotelslist/hotellist.html'


}