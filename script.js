const contactForm = document.getElementById('contact_form'),
    contactName = document.getElementById('name'),
    contactEmail = document.getElementById('email'),
    contactNumber = document.getElementById('phone'),
    contactSubject = document.getElementById('subject'),
    contactMessage = document.getElementById('message'),
    contactError = document.getElementById('error')

const sendEmail = (e) => {
    e.preventDefault();

    // if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactNumber.value === '' || contactSubject.value === '' || contactMessage.value === '') {
        contactError.classList.remove('color-blue')
        contactError.classList.add('color-red')
        // show message
        contactError.textContent = "Any field can't be blank"
    }
    else {
        //serviceID - templateID - #form -publicKey
        emailjs.sendForm('service_uycssqe', 'template_wvz3mwe', '#contact_form', 'Te1K7jfjh8c_tdxG-')
            .then(() => {
                // show message and add color
                contactError.classList.add('color-blue')
                contactError.textContent = 'Message Sent'

                // remove meaasge after 5sec
                setTimeout(() => {
                    contactError.textContent = '';
                    contactForm.reset();
                }, 5000);
            })
    }
}
contactForm.addEventListener('submit', sendEmail);







document.querySelectorAll('.menu a').forEach(item => {
    const span = item.querySelector('span');

    // Apply transition to span
    span.style.transition = 'font-size 0.3s';

    item.addEventListener('mouseover', () => {
        span.style.fontSize = '1.5rem';
    });

    item.addEventListener('mouseout', () => {
        span.style.fontSize = ''; // Reset to original size
    });
});


// navbar for mobile 
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');


bar.addEventListener('click', () => {
    menu.classList.toggle('show_menu');
    menu.style.display = menu.classList.contains('show_menu') ? 'flex' : 'none';
});

// document.addEventListener('click', (e) => {
//     if (!menu.contains(e.target) && !bar.contains(e.target)) {
//         menu.classList.remove('show_menu');
//         menu.style.display = 'none';
//     }
// });




const nameElement = document.getElementById('name');
const nameText = nameElement.textContent;
let coloredName = '';

// Create spans for each letter
for (let i = 0; i < nameText.length; i++) {
    coloredName += `<span class="letter">${nameText[i]}</span>`;
}
nameElement.innerHTML = coloredName;

const letters = nameElement.getElementsByClassName('letter');

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function animateLetters() {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[randomIndex];
    const newColor = getRandomColor();

    randomLetter.style.transition = 'color 0.5s ease';
    randomLetter.style.color = newColor;

    setTimeout(() => {
        randomLetter.style.transition = 'color 0.5s ease';
        randomLetter.style.color = '';
    }, 500);
}

// Run the animation every 2 seconds
setInterval(animateLetters, 1000);


const words = [" Frontend Developer", " Backend Developer", " UI/UX Designer"];
const roleElement = document.querySelector('.role');
let index = 0;

function startanimateLetters() {
    const word = words[index];
    roleElement.innerHTML = ''; // Clear previous word

    // Create span for each letter and set initial slide-in
    word.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.classList.add('char');
        span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for visibility
        roleElement.appendChild(span);

        // Delay the slide-in animation for each letter
        setTimeout(() => {
            span.classList.add('slide-in');
        }, i * 100);  // Delay between each letter sliding in
    });

    // After slide-in is complete, trigger slide-out
    setTimeout(() => {
        word.split('').forEach((char, i) => {
            const span = roleElement.children[i];
            setTimeout(() => {
                span.classList.add('slide-out');
            }, i * 100);  // Delay between each letter sliding out
        });
    }, 5000);  // Slide out letters 2 seconds after the last one slides in

    // Move to the next word after full animation completes
    setTimeout(() => {
        index = (index + 1) % words.length;  // Loop through words
        startanimateLetters();  // Start the process again with the next word
    }, 5000);  // Wait 3 seconds before moving to the next word
}

startanimateLetters();

// Function to switch between dark and light modes
function toggleMode() {
    const body = document.body;
    const toggleBtn = document.getElementById('toggle-mode-btn');

    // Check if dark mode is active
    if (body.classList.contains('dark-mode')) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleBtn.textContent = 'dark_mode'; // Change icon to light mode
    } else {
        // Switch to dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleBtn.textContent = 'light_mode'; // Change icon to dark mode
    }
}

// Add event listener for the mode toggle button
document.getElementById('toggle-mode-btn').addEventListener('click', toggleMode);

// By default, apply dark mode when the page loads
window.onload = function () {
    document.body.classList.add('dark-mode');
}


document.addEventListener("DOMContentLoaded", () => {
    const eduContainers = document.querySelectorAll('.edu_container');

    // Function to handle the visibility of elements when they appear in the viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Apply the visible class
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    };

    // Set up the intersection observer with a threshold for when to trigger the animations
    const observerOptions = {
        root: null, // Observe within the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each edu_container
    eduContainers.forEach(container => {
        observer.observe(container);
    });
});



// Click
document.addEventListener("DOMContentLoaded", () => {
    // Get the element with the class 'elem0'
    const det_box = document.querySelector('.det_box');
    const elem1 = document.querySelector('.elem1');
    const elem2 = document.querySelector('.elem2');
    const elem3 = document.querySelector('.elem3');

    // Add an event listener to handle the click event
    det_box.addEventListener('click', () => {
        // Open your GitHub account URL in a new tab
        window.open('https://github.com/IamSuvrodip?tab=repositories', '_blank');
    });
    elem1.addEventListener('click', () => {
        // Open your GitHub account URL in a new tab
        window.open('https://github.com/IamSuvrodip', '_blank');
    });
    elem2.addEventListener('click', () => {
        // Open your leetcode account URL in a new tab
        window.open('https://eduspark-one.vercel.app/', '_blank');
    });
    elem3.addEventListener('click', () => {
        // Open your linkedin account URL in a new tab
        window.open('https://www.linkedin.com/in/suvrodip-chakroborty-0aa21b264/', '_blank');
    });
});


// resume show
document.addEventListener("DOMContentLoaded", () => {
    // Get the button element
    const resumeButton = document.querySelector('button');

    // Add a click event listener
    resumeButton.addEventListener('click', () => {
        // Open the resume PDF link in a new tab for preview
        window.open('./assets/Suvrodip-Chakroborty-CV.pdf', '_blank');
    });
});





const boxes = document.querySelectorAll('.advantage_card');
let currentBoxIndex = 0;

// Function to apply hover effect
function applyHoverEffect() {
    // Remove 'hovered' class from all boxes
    boxes.forEach(box => box.classList.remove('hovered'));

    // Add 'hovered' class to the current box
    boxes[currentBoxIndex].classList.add('hovered');

    // Move to the next box, loop back if at the end
    currentBoxIndex = (currentBoxIndex + 1) % boxes.length;
}

// Start the loop with a 2-second interval
setInterval(applyHoverEffect, 3000);





const swiper = new Swiper('.certificates-wrapper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 5,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 347,
        modifier: 1,
        slideShadows: true,
    },

    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletClass: "swiper-pagination-bullet", // Default class
        bulletActiveClass: "swiper-pagination-bullet-active", // Default active class
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        601: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the modal elements
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    // Get all the buttons in the certificate list
    const buttons = document.querySelectorAll(".certificate-btn");

    // Loop through the buttons and add click event
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            // Get the image related to the clicked button
            const image = button.closest(".certificate-link").querySelector("img");

            // Set the modal image source to the clicked image source
            modalImg.src = image.src;

            // Display the modal
            modal.style.display = "block";
        });
    });

    // When the close button is clicked, hide the modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // When anywhere outside of the image (the black area) is clicked, hide the modal
    modal.addEventListener("click", function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});







// // project section swiper
// let next = document.querySelector(".next");
// let prev = document.querySelector(".prev");
// let project_slider = document.querySelector(".project_slider");

// next.addEventListener('click', function () {
//     let project_slides = document.querySelectorAll(".project_slides");
//     project_slider.appendChild(project_slides[0]);
// })
// prev.addEventListener('click', function () {
//     let project_slides = document.querySelectorAll(".project_slides");
//     project_slider.prepend(project_slides[project_slides.length - 1]);
// })





// education
document.getElementById('educationBtn').addEventListener('click', function () {
    document.getElementById('educationTimeline').style.display = 'block';
    document.getElementById('experienceTimeline').style.display = 'none';
});

document.getElementById('experienceBtn').addEventListener('click', function () {
    document.getElementById('educationTimeline').style.display = 'none';
    document.getElementById('experienceTimeline').style.display = 'block';
});



// Mixitup js
var mixer = mixitup('.projects_cards');

































































// document.addEventListener("contextmenu", function (event) {
//     event.preventDefault();
// });

// // Disable F12 and Ctrl+Shift+I (DevTools shortcuts)
// document.addEventListener("keydown", function (event) {
//     if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
//         event.preventDefault();
//     }
// });

