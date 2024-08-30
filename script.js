// script.js

// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Initial setup
    const messages = [
        "I miss you more with each passing day.",
        "Distance means so little when someone means so much.",
        "Even though we're miles apart, you're always in my heart.",
        "The hardest part of missing you is not knowing if you miss me too.",
        "I can't wait to see you again, and I hope that day comes soon."
    ];

    const messageButton = document.querySelector("button");
    const messageContainer = document.querySelector(".message-list");

    // Function to generate a random message
    function generateRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    // Function to display a new message
    function displayMessage() {
        const newMessage = generateRandomMessage();
        const messageElement = document.createElement("p");
        messageElement.classList.add("animated", "fadeIn");
        messageElement.innerHTML = `<strong>New Message:</strong> ${newMessage}`;
        messageContainer.appendChild(messageElement);

        // Remove the message after 5 seconds
        setTimeout(() => {
            messageElement.classList.add("fadeOut");
            setTimeout(() => {
                messageElement.remove();
            }, 1000);
        }, 5000);
    }

    // Event listener for the button
    messageButton.addEventListener("click", function() {
        displayMessage();
    });

    // Contact form validation
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        const reasonSelect = document.getElementById("reason");

        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === "") {
            isValid = false;
            showError(nameInput, "Name is required.");
        } else {
            clearError(nameInput);
        }

        // Validate email
        if (!validateEmail(emailInput.value)) {
            isValid = false;
            showError(emailInput, "Please enter a valid email address.");
        } else {
            clearError(emailInput);
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            isValid = false;
            showError(messageInput, "Message is required.");
        } else {
            clearError(messageInput);
        }

        // Validate reason
        if (reasonSelect.value === "") {
            isValid = false;
            showError(reasonSelect, "Please select a reason for contact.");
        } else {
            clearError(reasonSelect);
        }

        if (isValid) {
            // Submit the form or display a success message
            alert("Your message has been sent successfully!");
            contactForm.reset();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Show error message
    function showError(inputElement, message) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;
        inputElement.classList.add("error");
        if (!inputElement.nextElementSibling || !inputElement.nextElementSibling.classList.contains("error-message")) {
            inputElement.insertAdjacentElement("afterend", errorElement);
        }
    }

    // Clear error message
    function clearError(inputElement) {
        if (inputElement.nextElementSibling && inputElement.nextElementSibling.classList.contains("error-message")) {
            inputElement.nextElementSibling.remove();
        }
        inputElement.classList.remove("error");
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll(".faq-item h3");

    faqItems.forEach((item) => {
        item.addEventListener("click", function() {
            const answer = item.nextElementSibling;
            const isOpen = answer.style.maxHeight;

            // Close all open items
            faqItems.forEach((faq) => {
                if (faq !== item) {
                    faq.nextElementSibling.style.maxHeight = null;
                    faq.classList.remove("open");
                }
            });

            if (isOpen) {
                answer.style.maxHeight = null;
                item.classList.remove("open");
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                item.classList.add("open");
            }
        });
    });

    // Image gallery lightbox functionality
    const images = document.querySelectorAll(".gallery-section img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    images.forEach((image) => {
        image.addEventListener("click", function() {
            lightbox.classList.add("active");
            const img = document.createElement("img");
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener("click", function() {
        lightbox.classList.remove("active");
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // Animation on scroll
    const animatedElements = document.querySelectorAll(".animated");

    function handleScroll() {
        const windowHeight = window.innerHeight;
        animatedElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Form submit animation
    const submitButton = document.querySelector(".contact-form button[type='submit']");
    submitButton.addEventListener("click", function(event) {
        if (contactForm.checkValidity()) {
            submitButton.classList.add("submitting");
            setTimeout(() => {
                submitButton.classList.remove("submitting");
            }, 2000);
        }
    });

    // Placeholder for future enhancements
    function placeholderFunction() {
        console.log("This function is a placeholder for future enhancements.");
    }

    // Example of a complex function that may be added later
    function calculateComplexity() {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let complexity = 0;

        data.forEach((num) => {
            complexity += num * Math.random();
        });

        console.log("Calculated complexity:", complexity);
        return complexity;
    }

    // Call the placeholder function and the complex calculation
    placeholderFunction();
    calculateComplexity();

    // Placeholder for another future feature
    function anotherPlaceholder() {
        console.log("Another placeholder for future development.");
    }

    anotherPlaceholder();

    // Adding more code for completeness and future-proofing
    const extraFeature = document.createElement("div");
    extraFeature.classList.add("extra-feature");
    extraFeature.textContent = "This is an extra feature placeholder.";
    document.body.appendChild(extraFeature);

    // Example of event delegation for dynamic content
    document.body.addEventListener("click", function(event) {
        if (event.target && event.target.matches(".dynamic-button")) {
            alert("Dynamic button clicked!");
        }
    });

    // Add a dynamic button
    const dynamicButton = document.createElement("button");
    dynamicButton.classList.add("dynamic-button");
    dynamicButton.textContent = "Click me!";
    document.body.appendChild(dynamicButton);

    // Extra placeholder functions
    function futureEnhancement1() {
        console.log("Future enhancement 1 executed.");
    }

    function futureEnhancement2() {
        console.log("Future enhancement 2 executed.");
    }

    futureEnhancement1();
    futureEnhancement2();

    // Final placeholder
    function finalPlaceholder() {
        console.log("Final placeholder executed.");
    }

    finalPlaceholder();
});
