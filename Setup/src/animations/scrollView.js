const scrollView = () => {
    const winHeight = window.innerHeight + 150;
    const scrollPos = window.scrollY;
    const topCover = document.querySelector('.cover_top');
    const bottomCover = document.querySelector('.cover_bottom');
    
    //baseTop = 0 => -200
    //baseBottom = -100 => 100
    let scrollAlignDiff = scrollPos % winHeight;
    
    if(scrollAlignDiff > winHeight - 180 && scrollAlignDiff < winHeight - 21){
        window.scroll(0, scrollPos + 2)
    }
    else if(scrollAlignDiff < 180 && scrollAlignDiff > 21){
        window.scroll(0, scrollPos - 2)
    }

    if (scrollAlignDiff > winHeight/2){
        overFlow = scrollAlignDiff % (winHeight/2)
        scrollAlignDiff = winHeight/2 - overFlow
    };

    const align = 200 * (scrollAlignDiff/(winHeight/2))

    topCover.style.top = `${-200 + align}vh`
    bottomCover.style.top = `${100 - align}vh`

    
}


setInterval(scrollView, 15)