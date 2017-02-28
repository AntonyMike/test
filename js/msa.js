(function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.8&appId=1940853722806931";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

$(document).ready(function () {
    
    $('.carousel').carousel();
    
    $(".button-collapse").sideNav();
    
    $('.parallax').parallax();
    
    $('.materialboxed').materialbox();
    
    $('#text').html($('.active > .carousel-caption').html());
    $('.carousel').on('slid.bs.carousel', function () {
        $('#text').html($('.active > .carousel-caption').html());
    });
});