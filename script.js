document.addEventListener("DOMContentLoaded", function () {
  // 🌟 Typing Effect
  const typingElement = document.querySelector(".typing");
  const text = "Mahasiswa Vokasi Universitas Brawijaya";
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 5000);
    }
  }

  function erase() {
    if (index > 0) {
      typingElement.textContent = text.substring(0, index - 1);
      index--;
      setTimeout(erase, 100);
    } else {
      setTimeout(type, 1000);
    }
  }

  type(); // mulai efek mengetik

  // 🔧 Skills Card Toggle
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach(card => {
    card.addEventListener("click", function () {
      skillCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  // 🌗 Dark Mode Toggle (via ikon)
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  if (icon) {
    // Cek preferensi awal
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      icon.classList.replace("bx-moon", "bx-sun");
    }

    // Toggle on click
    icon.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      icon.classList.replace(isDark ? "bx-moon" : "bx-sun", isDark ? "bx-sun" : "bx-moon");
    });
  }

  // 🍔 Menu Icon (mobile)
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }
});

// 📖 About Section Toggle
function toggleMore() {
  const moreAbout = document.getElementById('more-about');
  const btn = event.target;

  if (moreAbout.style.maxHeight) {
    moreAbout.style.maxHeight = null;
    btn.textContent = "Read more";
  } else {
    moreAbout.style.maxHeight = moreAbout.scrollHeight + "px";
    btn.textContent = "Read less";
  }
}

// 🗂 Project Detail Toggle
function toggleDetails(button) {
  const allDetails = document.querySelectorAll('.project-detail');
  const allButtons = document.querySelectorAll('.project-card .btn');
  const detailDiv = button.nextElementSibling;

  const isOpen = detailDiv.classList.contains('show');

  allDetails.forEach(div => {
    div.classList.remove('show');
    div.style.maxHeight = null;
  });

  allButtons.forEach(btn => {
    btn.textContent = "Lihat Detail";
  });

  if (!isOpen) {
    detailDiv.classList.add('show');
    detailDiv.style.maxHeight = detailDiv.scrollHeight + "px";
    button.textContent = "Tutup Detail";
  }
}
