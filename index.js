const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

} 

function switchHome () {
    $('#js-home').click(function(event){
        $('#bioView').hide;
        $('#projectView').hide;
        $('#homeView').show;
        $('.footer').hide;
    });
}

function switchBio () {
    $('.navbar').on('click', '#js-bio', function(event){
        $('#bioView').show;
        $('#projectView').hide;
        $('#homeView').hide;
        $('.footer').show;
    });
}
function switchProjects () {
    $('#js-projects').click(function(event){
        $('#bioView').hide;
        $('#projectView').show;
        $('#homeView').hide;
        $('.footer').show;
    });
}

function initializePage(){
    navSlide();
    switchHome();
    switchBio();
    switchProjects();
}

$(initializePage);

