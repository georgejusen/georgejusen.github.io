function validateForm() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var option = document.getElementById("option").value;

  // Validasi Nama (tidak boleh kosong)
  if (fullname == "") {
    alert("Nama harus diisi");
    return false;
  }

  // Validasi Email (jika diisi, harus memiliki format yang valid)
  if (email !== "") {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Format email tidak valid");
      return false;
    }
  }

  // Validasi Nomor Telepon (jika diisi, harus memiliki format yang valid untuk Indonesia)
  if (phone !== "") {
    var phonePattern = /^[0-9]{9,12}$/;
    if (!phonePattern.test(phone)) {
      alert("Format nomor telepon tidak valid");
      return false;
    }
  }

  // Validasi Pesan (tidak boleh kosong)
  if (message == "") {
    alert("Pesan harus diisi");
    return false;
  }

  // Validasi Opsi (harus dipilih)
  if (option == "") {
    alert("Silakan pilih opsi");
    return false;
  }

  // Jika semua validasi sukses, form dikirim
  return true;
}

// ----------------------------------------------------------------------------------------
// Hamburger
let menuToggle = document.querySelector(".menu-toggle input");
let nav = document.querySelector("nav ul");
// Hamburger

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
