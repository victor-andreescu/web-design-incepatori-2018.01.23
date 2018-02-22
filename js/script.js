// document.write('<h3>Introdus cu Javascript</h3>')

// var titlu = $('h2');

// console.log(titlu);

$('.jsContact').on('click', function(event) {

    event.preventDefault();

    $('.jsOverlay').addClass('is-visible');
    // $('.jsOverlay').css({
    //     'visibility': 'visible',
    //     'opacity': 1
    // });
    
});

$('.jsModalClose').on('click', function(event) {

    event.preventDefault();

    $('.jsOverlay').removeClass('is-visible');
    // $('.jsOverlay').css({
    //     'visibility': 'hidden',
    //     'opacity': 0
    // });
});

