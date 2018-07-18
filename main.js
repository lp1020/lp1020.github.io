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

$(() => {
  var $scroller = $('#site-wrapper');
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $scroller.stop().animate({
        'scrollTop': $target.offset().top - $scroller.offset().top + $scroller.scrollTop()
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });
})


var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}

