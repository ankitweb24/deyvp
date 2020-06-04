var text = document.getElementById('text');
var shadow = '';
for (var i = 0; i < 11; i++) {
    shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #d9d9d9';
}
text.style.textShadow = shadow;

var type = new Typed('#typed', {
    stringsElement: '#items',
    typeSpeed: 100,
    startDelay: 1200,
    backSpeed: 30,
    loop: true,
    loopCount: 1000
});
var deg = 6;
var hr = document.getElementById('hr')
var mm = document.getElementById('mn');
var ss = document.getElementById('sc');
setInterval(() => {
    var day = new Date();
    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * deg;
    var ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

$(".count").counterUp({
    delay: 100,
    time: 8000
})
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "web series chart"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                { y: 450 },
                { y: 414 },
                { y: 520, indexLabel: "\u2191 highest", markerColor: "red", markerType: "triangle" },
                { y: 460 },
                { y: 450 },
                { y: 500 },
                { y: 480 },
                { y: 480 },
                { y: 410, indexLabel: "\u2193 lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
                { y: 500 },
                { y: 480 },
                { y: 510 }
            ]
        }]
    });
    chart.render();

}
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
window.onclick = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for chrome,mozila,firefox,opera
}