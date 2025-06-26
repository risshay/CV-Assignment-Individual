// Dark Mode Toggle 
function toggleDarkMode() {
  const body = document.body;
  const button = document.getElementById('mode-toggle');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    button.textContent = "💡 Light Mode";
  } else {
    button.textContent = "🌙 Dark Mode";
  }
}


// Typing Effect for Name
let i = 0;
const text = "HARIS SYAHMI BIN AHMAD PADZIL";
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-name").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;


// Reveal elements when scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

// Scroll to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show button after scrolling down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
