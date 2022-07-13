//video
$('video').hide().next().hide();
$('.play').click(function () {
    $(this).hide().prev().hide().next().next().show().trigger( 'play' ).next().show();
});
$('.video p').click(function () {
    $('video').trigger( 'pause' ).hide().next().hide().prev().prev().show().prev().show();
})
//关注我们
let flag = true;
$('.list span').click(function () {
    if (flag == true) {
        $('.list span').text('一').addClass('active').parent().parent().css('height','2.6667rem');
        flag = false;
    } else {
        $('.list span').text('＋').removeClass('active').parent().parent().css('height','');
        flag = true;
    }
});

// language
let language = true;
$('.button p').click(function () {
    if (language == true) {
        $('.button ul').addClass('click');
        language = false;
    } else {
        $('.button ul').removeClass('click');
        language = true
    }
});

//menu
let menu = true;
$('.menu').click(function () {
    if (menu == true) {
        $('.menu-list').addClass('menu-click');
        menu = false
    } else {
        $('.menu-list').removeClass('menu-click');
        menu = true
    }
})

//top
let top_hight = $('header').height();
window.onscroll = function (e) {
    e = document.documentElement.scrollTop
    if (e > top_hight) {
        $('.top').addClass('top-posi');
    } else {
        $('.top').removeClass('top-posi');
    }
}