const zonaImages = [
    document.getElementById('main-grip'),
    document.getElementById('zona-display'),
    document.getElementById('bottom-grip'),
    document.getElementById('top-grip'),
    document.getElementById('zona-chip'),
    document.getElementById('zona-complete'),
];

$(window).scroll(function () {
    let scrollPos = $(window).scrollTop();

    if (scrollPos >= 350) {
        scrollPos -= 350;

        const scrollCalculations = [
            Math.min(8.25, (scrollPos / 3.5) - 98),
            Math.min(-95.5, (scrollPos / 4) - 180),
            Math.min(-76.5, (scrollPos / 4) - 102),
            Math.min(-652.75, (scrollPos / 4) - 709)
        ]

        zonaImages[1].style.left = `${scrollCalculations[0]}px`; //Screen
        zonaImages[2].style.bottom = `${scrollCalculations[1]}px`; // bottom grip
        zonaImages[3].style.top = `${scrollCalculations[2]}px`; // top grip
        zonaImages[4].style.left = `${scrollCalculations[3]}px`; // chip

        if (Math.min(8.25, (scrollPos / 3.5) - 98) == 8.25) {
            $('#main-grip').fadeOut("slow");
            $('#zona-display').fadeOut("slow");
            $('#bottom-grip').fadeOut("slow");
            $('#top-grip').fadeOut("slow");
            $('#zona-chip').fadeOut("slow");
            $('#zona-complete').fadeIn("fast");


        } else {
            $('#main-grip').fadeIn("fast");
            $('#zona-display').fadeIn("fast");
            $('#bottom-grip').fadeIn("fast");
            $('#top-grip').fadeIn("fast");
            $('#zona-chip').fadeIn("fast");
            $('#zona-complete').hide();
        }

    }
});