function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
  
    const message = document.getElementById("message");
  
    // Validate password match
    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match!";
      return;
    }
  
    // Validate phone number (example: 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      message.textContent = "Enter a valid 10-digit phone number!";
      return;
    }
  
    // All validations passed
    message.style.color = "green";
    message.textContent = "Registration successful!";
    
    // Clear the form (optional)
    document.getElementById("registrationForm").reset();
  }
  