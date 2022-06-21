var now = 0;
var num = $(".slide").length;

function nextSlide(){
    now++;
    if(now >= num){
        now = 0;
    }
    $(".slide").fadeOut();
    $(".slide").eq(now).fadeIn();
}

function prevSlide(){
    now--;
    if(0 > now){
        now = num-1;
    }
    $(".slide").fadeOut();
    $(".slide").eq(now).fadeIn();
}

// setInterval(nextSlide,3000);

$("#next").click(function(){
    nextSlide();
});

$("#prev").click(function(){
    prevSlide();
});

// function sliding(dir){
//     now = now+dir;
//     if(now >= num){
//         now = 0;
//     }else if(now < 0){
//         now = num-1;
//     }

//     $(".slide").fadeOut();
//     $(".slide").eq(now).fadeIn();

//     $("#prev").click(function(){
//         sliding(-1);
//     });

//     $("#next").click(function(){
//         sliding(1);
//     });
// }
