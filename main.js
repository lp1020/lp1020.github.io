window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myTopBtn").style.display = "block";
    } else {
        document.getElementById("myTopBtn").style.display = "none";
    }
}


var $root = $('html, body');
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('#myTopBtn').click(function(){
    $root.animate({
        scrollTop: 0
    }, 800);
});



var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

