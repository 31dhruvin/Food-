
    var images = ["1.jpg", "2.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "11.jpg"];
    $(function () {
        var i = 0;
        $("#webpage").css("background-image", "url(images/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#webpage").fadeOut("slow", function () {
                $(this).css("background-image", "url(images/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 10000);
    });