//carousel start
 
    var slideIndex = 1;
    showSlides(slideIndex);
 
    //Next and previous buttons start
    $(".prev-slide").click(function() {
        plusSlides(-1);
    });
 
    $(".next-slide").click(function() {
        plusSlides(1);
    });
 
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    //Next and previous buttons end
 
    //dots start
    $(".dot1").click(function() {
        currentSlide(1);
    });
    $(".dot2").click(function() {
        currentSlide(2);
    });
    $(".dot3").click(function() {
        currentSlide(3);
    });
 
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    //dots end
    
    
    function showSlides(n) {
        var i;
        var slides = $(".mySlides");
        var dots = $(".dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
 
        for (var i = 0; i < dots.length; i++) {
            dots[i].className.replace("active", "");
            dots[i].classList.remove("active");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
 
 
    //auto slides start
    /*
    var slideIndex = 0;
    showSlides();
 
    function showSlides() {
        var i;
        var slides = $(".mySlides");
 
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
 
        slideIndex++;
 
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
 
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // 5 saniyede bir resim değişecek
    }
    */
    //auto slides end
    
    //carousel end