$(document).ready(function () {
    // Smooth scrolling for links
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    // Filter portfolio items
    $('.filter-btn').on('click', function () {
        const category = $(this).data('category');

        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        $('.portfolio-item').hide();
        if (category === 'all') {
            $('.portfolio-item').fadeIn();
        } else {
            $('.portfolio-item[data-category="' + category + '"]').fadeIn();
        }
    });
});
