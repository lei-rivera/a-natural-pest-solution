//header scroll animation for mobile
// window.addEventListener('scroll', function() {
//     if(window.scrollY > 399) {
//         *your code*
//     }
// });

// scroll animation for main
jQuery(document).ready(function() {
    
        jQuery('.main.to-id').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop:$('#pests').position().top}, 1000);
            return false;
        })
    });