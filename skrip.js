/* =============================================
   SKRIP.JS - JavaScript
   Stiven Candra Winata | Bisnis Digital
   Tema: DIGITAL BOLD
   ============================================= */

// =============================================
// BAGIAN 1: AMBIL ELEMEN
// =============================================

const tombolMenu = document.getElementById('tombolMenu');
const tautanNav = document.getElementById('tautanNav');
const tombolSapa = document.getElementById('tombolSapa');
const teksSapa = document.getElementById('teksSapa');
const navbar = document.getElementById('navbar');

// =============================================
// BAGIAN 2: MENU HP
// =============================================

if (tombolMenu) {
  tombolMenu.addEventListener('click', function() {
    tautanNav.classList.toggle('buka');
    
    const garis = document.querySelectorAll('.garis-menu');
    
    if (tautanNav.classList.contains('buka')) {
      garis[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      garis[1].style.opacity = '0';
      garis[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
      garis[0].style.transform = 'none';
      garis[1].style.opacity = '1';
      garis[2].style.transform = 'none';
    }
  });
}

// nutup menu pas klik link
const semuaLink = document.querySelectorAll('.tautan-nav a');
for (let i = 0; i < semuaLink.length; i++) {
  semuaLink[i].addEventListener('click', function() {
    tautanNav.classList.remove('buka');
    const garis = document.querySelectorAll('.garis-menu');
    garis[0].style.transform = 'none';
    garis[1].style.opacity = '1';
    garis[2].style.transform = 'none';
  });
}

// =============================================
// BAGIAN 3: SCROLL NAVBAR
// =============================================

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('bergeser');
  } else {
    navbar.classList.remove('bergeser');
  }
});

// =============================================
// BAGIAN 4: FITUR SAPAAN
// =============================================

const daftarSapaan = [
  "Halo! Makasih udah mampir. Kamu keren! 🔥",
  "Salam kenal! Ayo jadi temen belajar bareng! 🤝",
  "Semangat! Jangan pernah takut buat mulai. 💪",
  "Hai! Percaya diri aja, kamu pasti bisa! ⚡",
  "Belajar itu kunci sukses. Teruslah belajar! 📚",
  "Makasih udah baca websitenya. Kamu hebat! ✨",
  "Hidup itu penuh tantangan, hadapi aja! 🚀",
  "Jangan lupa bersyukur hari ini ya! 🌟",
  "Tetap rendah hati dan terus berkarya! 🎯",
  "Kamu spesial, jangan pernah ragu! 💯"
];

let urutanSapaan = 0;

if (tombolSapa && teksSapa) {
  tombolSapa.addEventListener('click', function() {
    teksSapa.textContent = daftarSapaan[urutanSapaan];
    teksSapa.classList.add('muncul');
    
    // efek bounce
    teksSapa.style.transform = 'translateY(-8px) scale(1.02)';
    setTimeout(function() {
      teksSapa.style.transform = 'translateY(0) scale(1)';
    }, 200);
    
    urutanSapaan = urutanSapaan + 1;
    if (urutanSapaan >= daftarSapaan.length) {
      urutanSapaan = 0;
    }
  });
}

// =============================================
// BAGIAN 5: ANIMASI BAR LEVEL
// =============================================

function cekDiLayar(element) {
  const rect = element.getBoundingClientRect();
  const tinggiLayar = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= tinggiLayar - 50;
}

function jalaninAnimasiBar() {
  const semuaBar = document.querySelectorAll('.bar-level');
  
  for (let i = 0; i < semuaBar.length; i++) {
    const level = semuaBar[i].querySelector('.level');
    
    if (level && cekDiLayar(semuaBar[i]) && !level.dataset.animasi) {
      const styleAttr = level.getAttribute('style');
      level.style.width = '0%';
      level.dataset.animasi = 'true';
      
      const match = styleAttr ? styleAttr.match(/width:\s*([^;]+)/) : null;
      const targetWidth = match ? match[1] : '0%';
      
      setTimeout(function() {
        level.style.width = targetWidth;
      }, 200 + (i * 80));
    }
  }
}

setTimeout(jalaninAnimasiBar, 300);
window.addEventListener('scroll', jalaninAnimasiBar);

// =============================================
// BAGIAN 6: TAHUN OTOMATIS
// =============================================

const semuaCopyright = document.querySelectorAll('.bawah-kaki p');
for (let i = 0; i < semuaCopyright.length; i++) {
  let teks = semuaCopyright[i].textContent;
  let tahunSekarang = new Date().getFullYear();
  teks = teks.replace('2026', tahunSekarang);
  semuaCopyright[i].textContent = teks;
}

// =============================================
// BAGIAN 7: PARALLAX KARTU
// =============================================

const ilustrasiHero = document.querySelector('.ilustrasi-hero');
const kartuTerbang = document.querySelectorAll('.kartu-terbang');

if (ilustrasiHero) {
  ilustrasiHero.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    
    for (let i = 0; i < kartuTerbang.length; i++) {
      const faktor = 15 + (i * 8);
      kartuTerbang[i].style.transform = 
        `translate(${mouseX * faktor}px, ${mouseY * faktor}px)`;
    }
  });
  
  ilustrasiHero.addEventListener('mouseleave', function() {
    for (let i = 0; i < kartuTerbang.length; i++) {
      kartuTerbang[i].style.transform = 'none';
    }
  });
}

// =============================================
// BAGIAN 8: EFEK JUDUL BERKEDIP
// =============================================

const judulAksen = document.querySelector('h1 .warna-aksen');
if (judulAksen) {
  setInterval(function() {
    judulAksen.style.transition = 'all 0.3s ease';
    judulAksen.style.opacity = '0.7';
    judulAksen.style.transform = 'scale(0.98)';
    
    setTimeout(function() {
      judulAksen.style.opacity = '1';
      judulAksen.style.transform = 'scale(1)';
    }, 300);
  }, 4000);
}

// =============================================
// BAGIAN 9: SCROLL KE ATAS
// =============================================

const tombolKembali = document.querySelector('.kartu-link.kembali');
if (tombolKembali) {
  tombolKembali.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =============================================
// BAGIAN 10: CONSOLE PESAN
// =============================================

console.log('%c🔥 STIVEN CANDRA WINATA', 'font-size: 24px; font-weight: 900; color: #0a0a0a;');
console.log('%c📌 Mahasiswa Bisnis Digital', 'font-size: 16px; font-weight: 700; color: #0066ff;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'font-size: 12px; color: #888;');
console.log('%c⚡ Fun Fact:', 'font-size: 14px; font-weight: bold; color: #333;');
console.log('%c  Website ini dibuat dengan ❤️ dan kode', 'font-size: 13px; color: #666;');
console.log('%c  HTML + CSS + JavaScript + Semangat! 🔥', 'font-size: 13px; color: #666;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'font-size: 12px; color: #888;');
console.log('%c"BERANI MENCOBA ATAU JADI PECUNDANG"', 'font-size: 15px; font-weight: 800; font-style: italic; color: #0a0a0a;');
console.log('%c  - Stiven Candra Winata', 'font-size: 12px; color: #aaa;');

// =============================================
// BAGIAN 11: ANIMASI MUNCUL BERTAHAP
// =============================================

function animasiMunculBertahap(selector, delayAwal) {
  const elemen = document.querySelectorAll(selector);
  
  for (let i = 0; i < elemen.length; i++) {
    const el = elemen[i];
    
    function cekDanMuncul() {
      if (cekDiLayar(el) && !el.dataset.muncul) {
        el.dataset.muncul = 'true';
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.95)';
        el.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        
        setTimeout(function() {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
        }, delayAwal + (i * 120));
      }
    }
    
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px) scale(0.95)';
    el.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    
    setTimeout(cekDanMuncul, 100);
    window.addEventListener('scroll', cekDanMuncul);
  }
}

animasiMunculBertahap('.kartu-keahlian', 200);
animasiMunculBertahap('.kartu-mimpi', 200);
animasiMunculBertahap('.item-fakta', 100);
animasiMunculBertahap('.item-jalur', 150);

// =============================================
// BAGIAN 12: EFEK TOMBOL KEDIP
// biar tombol "Kenalan Yuk!" lebih striking
// =============================================

const tombolUtama = document.querySelector('.tombol.utama');
if (tombolUtama) {
  setInterval(function() {
    tombolUtama.style.transition = 'box-shadow 0.3s ease';
    tombolUtama.style.boxShadow = '0 0 30px rgba(0, 102, 255, 0.3)';
    
    setTimeout(function() {
      tombolUtama.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    }, 500);
  }, 3000);
}

// =============================================
// AKHIR SKRIP.JS
// =============================================
