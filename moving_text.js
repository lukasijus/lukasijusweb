$(function() {
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            scroll2 = scroll - 49;
            document.getElementById("text1").style.transform = "translateX(" + scroll2 + "px)";
        
        } 

        if (scroll >=700) {
            scroll3 = scroll - 699;
            document.getElementById("text2").style.transform = "translateX(" + scroll3 + "px)";
        }
    });
  
});