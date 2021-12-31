const dailySelector = document.getElementById('daily');
const weeklySelector = document.getElementById('weekly');
const monthlySelector = document.getElementById('monthly');

dailySelector.addEventListener('click', () => {
    let weeklyDivArray = Array.from(document.getElementsByClassName('weekly'));
    let dailyDivArray = Array.from(document.getElementsByClassName('daily'));
    let monthlyDivArray = Array.from(document.getElementsByClassName('monthly'));
    let dailySelector = document.getElementById('daily');
    let activeSelection = document.getElementsByClassName('active');
    activeSelection[0].classList.remove('active');
    dailySelector.classList.add('active');

    dailyDivArray.forEach(element => {
        element.setAttribute('style', 'display:block')
    });
    monthlyDivArray.forEach(element => {
        element.setAttribute('style', 'display:none')
    });
    weeklyDivArray.forEach(element => {
        element.setAttribute('style', 'display:none');
    });


});
weeklySelector.addEventListener('click', () => {
    let weeklyDivArray = Array.from(document.getElementsByClassName('weekly'));
    let dailyDivArray = Array.from(document.getElementsByClassName('daily'));
    let monthlyDivArray = Array.from(document.getElementsByClassName('monthly'));
    let activeSelection = document.getElementsByClassName('active');
    let weeklySelector = document.getElementById('weekly');
    activeSelection[0].classList.remove('active');
    weeklySelector.classList.add('active');

    dailyDivArray.forEach(element => {
        element.setAttribute('style', 'display:none')
    });
    monthlyDivArray.forEach(element => {
        element.setAttribute('style', 'display:none')
    });
    weeklyDivArray.forEach(element => {
        element.setAttribute('style', 'display:block');
    });


})
monthlySelector.addEventListener('click', () => {
    let weeklyDivArray = Array.from(document.getElementsByClassName('weekly'));
    let dailyDivArray = Array.from(document.getElementsByClassName('daily'));
    let monthlyDivArray = Array.from(document.getElementsByClassName('monthly'));
    let monthlySelector = document.getElementById('monthly')
    let activeSelection = document.getElementsByClassName('active');
    activeSelection[0].classList.remove('active');
    monthlySelector.classList.add('active');

    dailyDivArray.forEach(element => {
        element.setAttribute('style', 'display:none')
    });
    monthlyDivArray.forEach(element => {
        element.setAttribute('style', 'display:block')
    });
    weeklyDivArray.forEach(element => {
        element.setAttribute('style', 'display:none');
    });

})