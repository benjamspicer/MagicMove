function login_overlay() {
  el = document.getElementById("login-overlay");
  el.style.display = "block";
  window.onclick = function(event) {
    if (event.target == el) {
        el.style.display = "none";
    }
}
}
