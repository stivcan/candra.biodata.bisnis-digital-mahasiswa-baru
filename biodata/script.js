/**
 * ==========================================================================
 * JAVASCRIPT DASAR: WEBSITE PORTOFOLIO STIVEN CANDRA WINATA
 * Kode sederhana, mudah dipelajari, dan mudah dimengerti alur logikanya.
 * ==========================================================================
 */

// Menunggu seluruh halaman HTML selesai dimuat sebelum menjalankan fungsi
document.addEventListener("DOMContentLoaded", function () {
  
  // ------------------------------------------------------------------------
  // 1. FUNGSI UNTUK TOMBOL "OPEN" DI SPLASH SCREEN
  // ------------------------------------------------------------------------
  const splashScreen = document.getElementById("splashScreen");
  const btnOpen = document.getElementById("btnOpen");

  // Ketika tombol OPEN diklik:
  if (btnOpen && splashScreen) {
    btnOpen.addEventListener("click", function () {
      // Tambahkan class 'tutup' agar splash screen menghilang ke atas
      splashScreen.classList.add("tutup");
    });
  }

  // ------------------------------------------------------------------------
  // 2. FUNGSI UNTUK MENU DI LAYAR HP (MOBILE MENU)
  // ------------------------------------------------------------------------
  const tombolMenuHp = document.getElementById("tombolMenuHp");
  const menuHpDropdown = document.getElementById("menuHpDropdown");
  const semuaLinkHp = document.querySelectorAll(".menu-hp-item");

  if (tombolMenuHp && menuHpDropdown) {
    // Saat tombol burger diklik, buka atau tutup dropdown
    tombolMenuHp.addEventListener("click", function () {
      if (menuHpDropdown.style.display === "flex") {
        menuHpDropdown.style.display = "none";
      } else {
        menuHpDropdown.style.display = "flex";
      }
    });

    // Saat salah satu link menu di HP diklik, otomatis tutup menu dropdown
    semuaLinkHp.forEach(function (link) {
      link.addEventListener("click", function () {
        menuHpDropdown.style.display = "none";
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. FUNGSI TAHUN OTOMATIS DI FOOTER
  // ------------------------------------------------------------------------
  const tahunSaatIni = document.getElementById("tahunSaatIni");
  if (tahunSaatIni) {
    // Mengambil tahun saat ini dari komputer/browser (misal: 2026)
    tahunSaatIni.textContent = new Date().getFullYear();
  }

  // ------------------------------------------------------------------------
  // 4. FUNGSI AKTIF MENU NAVBAR SAAT DI-SCROLL (NAVBAR HIGHLIGHT)
  // ------------------------------------------------------------------------
  const semuaSeksi = document.querySelectorAll("section");
  const semuaNavLinks = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", function () {
    let posisiScroll = window.scrollY + 150;

    semuaSeksi.forEach(function (seksi) {
      let id = seksi.getAttribute("id");
      let atasSeksi = seksi.offsetTop;
      let tinggiSeksi = seksi.offsetHeight;

      // Jika posisi scroll berada di dalam area seksi tertentu
      if (posisiScroll >= atasSeksi && posisiScroll < atasSeksi + tinggiSeksi) {
        semuaNavLinks.forEach(function (navLink) {
          navLink.classList.remove("active");
          if (navLink.getAttribute("href") === "#" + id) {
            navLink.classList.add("active");
          }
        });
      }
    });
  });

});

// --------------------------------------------------------------------------
// 5. FUNGSI MENYALIN TEKS KONTAK (INSTAGRAM, WA, GMAIL)
// --------------------------------------------------------------------------
function salinTeks(teksYangDisalin) {
  // Fitur browser untuk menyalin teks ke clipboard
  navigator.clipboard.writeText(teksYangDisalin).then(function () {
    // Menampilkan kotak notifikasi popup
    const pesanToast = document.getElementById("pesanToast");
    if (pesanToast) {
      pesanToast.textContent = "Tersalin: " + teksYangDisalin;
      pesanToast.style.display = "block";

      // Sembunyikan notifikasi setelah 2.5 detik
      setTimeout(function () {
        pesanToast.style.display = "none";
      }, 2500);
    }
  }).catch(function () {
    alert("Tersalin: " + teksYangDisalin);
  });
}
