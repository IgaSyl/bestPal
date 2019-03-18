$('nav ul li a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 80
    });
})

$(function () {
    $(document).scroll(function () {
        var $nav = $("nav");
        var $img = $("nav ul li img");
        var $height = $("nav ul li");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $img.toggleClass('changeSize', $(this).scrollTop() > $nav.height());
        $height.toggleClass('lineHeight', $(this).scrollTop() > $nav.height());
    });
})





/*


document.addEventListener("DOMContentLoaded", function () {

    //fetch('http://localhost/adoptuj/admin.php')
    fetch('http://adoptuj.lymkya.me/admin.php')

        .then(response => response.json())
        .then(jsonResponse => console.log(jsonResponse[0].name))
        //.then(jsonResponse => document.getElementById("des").innerText = jsonResponse[0].name);
        //.then(.setAttribute("src", "jsonResponse[0].img"))




});

*/

