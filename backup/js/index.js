const form = document.getElementById('hero_form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        submitFormData();
    }
});

function validateForm() {
    let isValid = true;

    // Resetting styles
    nameInput.classList.remove('border-red-500');
    emailInput.classList.remove('border-red-500');
    phoneInput.classList.remove('border-red-500');

    // Validating Name
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('border-red-500');
        isValid = false;
    }

    // Validating Email
    if (emailInput.value.trim() === '') {
        emailInput.classList.add('border-red-500');
        isValid = false;
    } else {
        // Using a simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('border-red-500');
            isValid = false;
        }
    }

    // Validating Phone Number
    if (phoneInput.value.trim() === '') {
        phoneInput.classList.add('border-red-500');
        isValid = false;
    } else {
        if (phoneInput.value.trim().length > 13) {
            phoneInput.classList.add('border-red-500');
            isValid = false;
        }
    }

    return isValid;
}

function submitFormData() {
    const formData = new FormData();
    formData.append('name', nameInput.value.trim());
    formData.append('email', emailInput.value.trim());
    formData.append('phone', phoneInput.value.trim());

    fetch('https://example.com/api/submit', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Form submitted successfully:', data);
            // Optionally, you can show a success message or redirect the user
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            // Handle errors here (e.g., show an error message to the user)
        });
}

// Adding event listeners for real-time validation
nameInput.addEventListener('input', function () {
    nameInput.classList.remove('border-red-500');
    validateForm();
});

emailInput.addEventListener('input', function () {
    emailInput.classList.remove('border-red-500');
    validateForm();
});

phoneInput.addEventListener('input', function () {
    phoneInput.classList.remove('border-red-500');
    validateForm();
});




$(document).ready(
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 5,
            }
        }
    })
);