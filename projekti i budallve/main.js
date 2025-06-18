const form = document.getElementById('contactForm');
  const errorDiv = document.getElementById('formError');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorDiv.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name.length < 3) {
      errorDiv.textContent = 'Name must be at least 3 characters.';
      return;
    }

    // Simple email validation regex
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      errorDiv.textContent = 'Please enter a valid email address.';
      return;
    }

    if (message.length < 10) {
      errorDiv.textContent = 'Message must be at least 10 characters.';
      return;
    }

    alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
    form.reset();
  });
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  let currentIndex = 0;
  const totalImages = images.length;

  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 600}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = totalImages - 1;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalImages) currentIndex = 0;
    updateSlider();
  });

  // Për automatik, nëse dëshiron
  // setInterval(() => {
  //   nextBtn.click();
  // }, 3000);