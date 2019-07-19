const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

} 

function switchHome () {
    $('.homeLink').click(function(){
        $('#homeView').removeClass('hide');
        $('#bioView').addClass('hide');
        $('#projectView').addClass('hide');
        $('.footer').addClass('hide');
    });
}

function switchBio () {
    $('.bioLink').click(function(){
        $('#bioView').removeClass('hide');
        $('#projectView').addClass('hide');
        $('#homeView').addClass('hide');
        $('.footer').removeClass('hide');
    });
}
function switchProjects () {
    $('.projectsLink').click(function(){
        $('#projectView').removeClass('hide')
        $('#bioView').addClass('hide');
        $('#homeView').addClass('hide');
        $('.footer').removeClass('hide');
    });
}

function initializePage(){
    navSlide();
    switchHome();
    switchBio();
    switchProjects();
}

$(initializePage);

