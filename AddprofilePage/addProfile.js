let saveBtn = document.querySelector('.btnSave');


saveBtn.addEventListener('touchstart', function() {
    let nameInpt    = document.querySelector('#inputName').value,
        ageInpt     = document.querySelector('#inputAge').value,
        favTeamInpt = document.querySelector('#inputFavTeam').value,
        footballPos = document.querySelector('#footPos');
    
    if(nameInpt !== ''  && ageInpt !== ''  && favTeamInpt !== '') {
        let User = {
            name:         nameInpt,
            age:          ageInpt,
            favoriteTeam: favTeamInpt,
            position: footballPos.value   
        };
        localStorage.setItem('UserData', `<div class="profile"> <div class="top"> <div class="profileBlock"> <div class="profileName"> <div class="avatar"></div>${User.name}</div><div class="box"> <div class="text"> Возраст: ${User.age}</div><div class="text"> Позиция: ${User.position}</div><div class="level"> Уровень <div class="level_box"> 1 </div></div></div></div></div><div class="onlyWrap"><div class="favTeamBlock"> Любимая команда: ${User.favoriteTeam}</div><div class="changeProfile"> Внести корективи </div></div></div>`);
        document.location.assign('../index.html');
    }
    else{
        alert('Inputs must have a litters, Inputs mast be lover as 8');
    }
});