$(document).ready(() => {
    const active = $(".slides img");
    var count = 0;
    const next = () => {
        $(active[count]).removeClass('active');
        if (count >= active.length - 1) {
            count = 0;
        }
        else {
            count++;
        }
        $(active[count]).addClass('active');
    }
    setInterval(next, 1000)

    const left=$('.lefts')
    const right=$('.rights')
    const slider=$('.sliders')
    const img=$('.image').length
    let slidenum=1;

    right.on('click',()=>{
        if(slidenum<img){
            slider.css({'transform':`translateX(-${slidenum*100}vw)`})
            slidenum++;
        }
        else{
            slider.css({'transform':`translateX(0vw)`})
            slidenum=1
        }
    })
    left.on('click',()=>{
        if(slidenum>1){
            slider.css({'transform':`translateX(-${(slidenum-2)*100}vw)`})
            slidenum-- 
        }
        else{
            slider.css({'transform':`translateX(-${(img-1)*100}vw)`})
            slidenum=img

        }
    })
});
