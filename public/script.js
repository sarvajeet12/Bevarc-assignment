// alert("hello")
// ---------------------------- FORM Validation ---------------------------

// notification
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form submission if validation fails

        if (!validateForm()) {
            return; // if validate fails, do not proceed
        }

        // form data to be sent to the server
        const formData = new FormData(form);
        const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

        try {
            const response = await fetch("/api/bookings", {
                method: "POST",
                body: jsonData,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (response.ok) {
                //show notification
                notification.style.display = "block";

                setTimeout(() => {
                    notification.style.display = 'none';
                }, 3000);

                // Reset the form after submission 
                form.reset();
            } else {
                alert(data.message)
            }
        } catch (error) {
            alert("An error occurred while submitting the form.")
        }
    })
});


// validation
function validateForm() {


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const budget = document.getElementById("budget").value.trim();
    const details = document.getElementById("details").value.trim();
    const address = document.getElementById("address").value.trim();

    // Validate name 
    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Validate email 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone number (10 digits) 
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number."); return false;
    }

    // Validate service 
    if (service === "") {
        alert("Please select a preferred service.");
        return false;
    }

    // Validate date 
    if (date === "") {
        alert("Please select a preferred start date.");
        return false;
    }

    // Validate budget 
    if (budget === "") {
        alert("Please budget budget.");
        return false;
    }

    // Validate details 
    if (details === "") {
        alert("Please enter details of work.");
        return false;
    }

    // Validate address 
    if (address === "") {
        alert("Please enter address.");
        return false;
    }

    return true;
}









// -------------------------- handle hamburger menu -----------------------

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const menuList = document.getElementById('menuList');

    menuIcon.addEventListener('click', () => {
        menuList.classList.toggle('show');
    });
});


// ------------------------------------------- slide image --------------------
let flag = 0;

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}

// firstly this function called before click
slideshow(flag);

function slideshow(num) {
    let slides = document.getElementsByClassName("slide");

    if (num == slides.length) {
        flag = 0;
        num = 0;
    }

    if (num < 0) {
        flag = slides.length - 1
        num = slides.length - 1
    }

    for (let y of slides) {
        y.style.display = "none";


        slides[num].style.display = "block";
    }
}


// ------------------------------- swiper js -----------------------------
new Swiper('.swiper', {
    loop: true,
    spaceBetween: 40,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints:
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    }

});


// ----------------------------- footer copyright section -------------------
// current year

let date = new Date();
let year = date.getFullYear();
document.getElementById('currYear').innerHTML = year;