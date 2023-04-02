window.addEventListener("scroll", function () {

    let nav = this.document.getElementById("before");
    nav.classList.toggle("after", this.window.scrollY > 0);

})