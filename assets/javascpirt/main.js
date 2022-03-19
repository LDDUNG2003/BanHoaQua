function changImg() {
    var imgs = ['./assets/img/slider_1.jpg', './assets/img/slider_2.jpg', './assets/img/slider_3.jpg'];
    var i = 0;
    setInterval(
        function() {
            if (i == imgs.length) {
                i = 0;
            }
            document.getElementById('slider_img').style.backgroundImage = 'url(' + imgs[i] + ')';
            i++;
        }, 4000)
}
changImg();

function nextImage() {
    var imgs = ['./assets/img/slider_1.jpg', './assets/img/slider_2.jpg', './assets/img/slider_3.jpg'];
    document.getElementById('slider_img').style.backgroundImage = 'url(' + imgs[i] + ')';
    i++;
}