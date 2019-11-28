document.addEventListener('DOMContentLoaded', function() {
    let addToTraining = document.querySelector('.addToTrainingBtn');

    addToTraining.addEventListener('touchstart', function() {
        let title = document.querySelector('.mainTitle').innerHTML;
        
        console.log(1);
        if(localStorage.getItem('trainingExs') == null) {
            localStorage.setItem('trainingExs', `<div class="block"> <img src="https://i.ytimg.com/vi/KYJX0Wt6OdM/hqdefault.jpg" alt="img"><div class="cape"><div class="title">${title}</div></div></div>`);
        }
        else{
            let value = localStorage.getItem('trainingExs');
            localStorage.setItem( 'trainingExs', ` ${value} <div class="block"> <img src="https://i.ytimg.com/vi/KYJX0Wt6OdM/hqdefault.jpg" alt="img"><div class="cape"><div class="title">${title}</div></div></div>`);
        }
        document.location.assign('../index.html');
    });
});
