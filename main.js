window.addEventListener('DOMContentLoaded', function() {
    // get all elements from page
    let MY_WORK_btn  = document.querySelector('.MY_WORK');
    let ECS_btn      = document.querySelector('.ECS');
    let PROFILE_btn  = document.querySelector('.PROFILE');
    let pages        = document.querySelectorAll('.page');
    let btns         = document.querySelectorAll('.navigation_items');
    let pageIndex    = 1;

    // algorithm of change page
    function setPage() {
        
        pages.forEach((item) => item.classList.remove('pageActive'));
        for(let i = 0; i < btns.length; i++) {
            btns[i].classList.remove(`activeBtn${i + 1}`);
        }

        pages[pageIndex - 1].classList.add('pageActive');
       
        if(pageIndex == 1) {
            btns[pageIndex - 1].classList.add('activeBtn1');
        }
        else if(pageIndex == 2){
            btns[pageIndex - 1].classList.add('activeBtn2');
        }
        else{
            btns[pageIndex - 1].classList.add('activeBtn3');
        }
    }
    setPage();

    MY_WORK_btn.addEventListener('touchstart', function() {
        let texFunc = function(func) {
            pageIndex = 1;
            func();
        };
        texFunc(setPage);
    });

    ECS_btn.addEventListener('touchstart', function() {
        let texFunc = function(func) {
            pageIndex = 2;
            func();
        };
        texFunc(setPage);
    });

    PROFILE_btn.addEventListener('touchstart', function() {
        let texFunc = function(func) {
            pageIndex = 3;
            func();
        };
        texFunc(setPage);
    });

    // Checking whether added profile or not
    if(localStorage.getItem('UserData') !== null) {
        let div = document.querySelector('.profileFather');
        div.innerHTML = localStorage.getItem('UserData');
        
        let changeProfileBtn = document.querySelector('.changeProfile');

        // chenge btn
        changeProfileBtn.addEventListener('touchstart', function() {
            document.location.assign('./AddprofilePage/index.html');
        });
    }

});
