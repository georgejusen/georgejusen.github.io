function validateForm() {
  let fullnameInput = document.getElementById("fullname");
  let emailInput = document.getElementById("email");
  let optionInput = document.getElementById("option");

  let fullnameValue = fullnameInput.value.trim();
  let emailValue = emailInput.value.trim();
  let optionValue = optionInput.value;

  // Validasi field nama lengkap
  if (fullnameValue === "") {
    alert("Please enter your name.");
    fullnameInput.focus();
    return false;
  }

  // Validasi field email
  if (emailValue === "") {
    alert("Please enter your email address.");
    emailInput.focus();
    return false;
  } else if (!isValidEmail(emailValue)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }

  // Validasi field pilihan
  if (optionValue === "") {
    alert("Please select an option.");
    optionInput.focus();
    return false;
  }

  // Jika semua validasi sukses
  return true;
}

function isValidEmail(email) {
  // Regular expression untuk validasi email
  let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

// Hamburger
let menuToggle = document.querySelector(".menu-toggle input");
let nav = document.querySelector("nav ul");
// Hamburger

document
  .getElementById("input-form")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir

    // Mengambil nilai dari elemen-elemen input
    let nama = document.getElementById("form-nama").value;
    let tglLahir = document.getElementById("form-tgl-Lahir").value;
    let jenisKelamin = document.querySelector(
      'input[name="jenis_kelamin"]:checked'
    ).value;
    let pesan = document.getElementById("form-area").value;

    // Mengisi elemen-elemen output dengan nilai yang diambil
    document.getElementById("timestamp").innerHTML = "Timestamp: " + new Date();
    document.getElementById("nama").innerHTML = "Nama: " + nama;
    document.getElementById("tgl-Lahir").innerHTML =
      "Tanggal Lahir: " + tglLahir;
    document.getElementById("jenisKelamin").innerHTML =
      "Jenis Kelamin: " + jenisKelamin;
    document.getElementById("pesan").innerHTML = "Pesan: " + pesan;
  });

window.addEventListener("DOMContentLoaded", function () {
  var slideIndex = 0;
  var slides = [
    "../assets/hero_image/drone-hero2-optimized.jpg",
    "../assets/hero_image/dji.jpg",
    "../assets/hero_image/Drones.jpg",
    "../assets/hero_image/hero-drone.jpg",
  ];

  var imageSlide = document.getElementById("image-slide");

  function showSlide(index) {
    imageSlide.style.opacity = 0;
    imageSlide.style.transform = "translateX(-100%)";

    setTimeout(function () {
      imageSlide.style.backgroundImage = "url('" + slides[index] + "')";
      imageSlide.style.opacity = 1;
      imageSlide.style.transform = "translateX(0%)";
    }, 500);

    slideIndex = index;
  }

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    showSlide(slideIndex);
  }

  setInterval(nextSlide, 6000); // Ganti slide setiap 3 detik

  showSlide(slideIndex); // Tampilkan slide pertama saat halaman dimuat
});
