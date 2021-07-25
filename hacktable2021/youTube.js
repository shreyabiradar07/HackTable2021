
    $(".service").click(function () {
        window.open(
          '/html/youTube.html',
          '_blank'
        );
    });

    $("a").click(function (event) {
        event.stopPropagation();
    });