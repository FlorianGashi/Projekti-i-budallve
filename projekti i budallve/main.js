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