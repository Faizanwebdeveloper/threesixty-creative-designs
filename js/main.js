$(document).ready(function () {
    $("#clickMe").click(function () {
        alert("Button Clicked!");
    });
    $("#client_owl").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 4 },
            992: { items: 5 }
        }
    });

    $("#testimonial-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        items: 1 // Ensures only one item is shown at a time
    });
    AOS.init();
    $(window).on("scroll", function () {
        var scrollPos = $(document).scrollTop();

        $(".section").each(function () {
            var sectionTop = $(this).offset().top - 100;
            var sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                var currentId = $(this).attr("id");
                $(".navbar-nav .nav-link").removeClass("active");
                $('.navbar-nav .nav-link[href="#' + currentId + '"]').addClass("active");
            }
        });

   
        if (scrollPos < 20) {
            $(".navbar-nav .nav-link").removeClass("active");
            $('.navbar-nav .nav-link[href="#"], .navbar-nav .nav-link[href="index.html"]').addClass("active");
        }
    });

    $("#contactForm").submit(function (e) {
        e.preventDefault();
        let isValid = true;

        // Name validation
        if ($("#name").val().trim() === "") {
            $("#name").next(".error").show();
            isValid = false;
        } else {
            $("#name").next(".error").hide();
        }

        // Email validation
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test($("#email").val())) {
            $("#email").next(".error").show();
            isValid = false;
        } else {
            $("#email").next(".error").hide();
        }

        // Message validation
        if ($("#message").val().trim() === "") {
            $("#message").next(".error").show();
            isValid = false;
        } else {
            $("#message").next(".error").hide();
        }

        // If all fields are valid, show success message
        if (isValid) {
            $(".success-message").fadeIn().delay(3000).fadeOut();
            $("#contactForm")[0].reset();
        }
    });
});

