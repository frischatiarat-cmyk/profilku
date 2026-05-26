// Dark Mode
function darkMode(){

    document.body.classList.toggle("dark-mode");

}

// Form Kontak
document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Pesan berhasil dikirim!");

    this.reset();

});