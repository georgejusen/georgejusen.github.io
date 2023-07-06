function validateForm() {
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  let option = document.getElementById("option").value;

  // Validasi Nama (tidak boleh kosong)
  if (fullname == "") {
    showModal("Nama harus diisi");
    return false;
  }

  // Validasi Email (jika diisi, harus memiliki format yang valid)
  if (email !== "") {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showModal("Format email tidak valid");
      return false;
    }
  }

  // Validasi Nomor Telepon (jika diisi, harus memiliki format yang valid untuk Indonesia)
  if (phone !== "") {
    let phonePattern = /^[0-9]{9,12}$/;
    if (!phonePattern.test(phone)) {
      showModal("Format nomor telepon tidak valid");
      return false;
    }
  }

  // Validasi Pesan (tidak boleh kosong)
  if (message == "") {
    showModal("Pesan harus diisi");
    return false;
  }

  // Validasi Opsi (harus dipilih)
  if (option == "") {
    showModal("Silakan pilih opsi");
    return false;
  }

  // Jika semua validasi sukses, form dikirim
  return true;
}

function showModal(message) {
  var modal = document.getElementById("myModal");
  var modalMessage = document.getElementById("modalMessage");
  modalMessage.innerHTML = message;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
// ----------------------------------------------------------------------------------------
// Hamburger
let menuToggle = document.querySelector(".menu-toggle input");
let nav = document.querySelector("nav ul");
// Hamburger

window.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  let slides = [
    "assets/hero_image/drone-hero2-optimized.jpg",
    "assets/hero_image/dji.jpg",
    "assets/hero_image/Drones.jpg",
    "assets/hero_image/hero-drone.jpg",
  ];

  let imageSlide = document.getElementById("image-slide");

  function showSlide(index) {
    imageSlide.style.opacity = 0;
    imageSlide.style.transform = "translateX(-100%)"; // Menggeser slide ke kiri sebelum mengubah gambar

    setTimeout(function () {
      imageSlide.style.backgroundImage = "url('" + slides[index] + "')";
      imageSlide.style.opacity = 1;
      imageSlide.style.transform = "translateX(0%)"; // Kembali ke posisi semula setelah gambar diubah
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

  setInterval(nextSlide, 6000); // Ganti slide setiap 6 detik

  showSlide(slideIndex); // Tampilkan slide pertama saat halaman dimuat
});
