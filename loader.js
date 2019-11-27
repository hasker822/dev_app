document.body.onload = function() {
    
        let preloader = document.querySelector('.loader');
    
        if(!preloader.classList.contains('done')) {
            preloader.classList.add('done');
            if(preloader.classList.contains('done')) {
                setTimeout(() => {
                   preloader.classList.add('none') ;
                }, 1000);
            } 
        }
    
    
};