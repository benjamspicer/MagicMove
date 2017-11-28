function overlay() {
  el = document.getElementById("overlay");
  el.style.display = "block";
  window.onclick = function(event) {
    if (event.target == el) {
        el.style.display = "none";
    }
}
}
