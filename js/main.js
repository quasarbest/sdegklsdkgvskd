// "use strick"
// var sliderIndex = 1
// showSlider(sliderIndex);

// function plusslider(n) {
//     showSlider(sliderIndex += n);
// }

// function curentSlider(n) {
//     showSlider(sliderIndex = n);
// }
 
// function showSlider(n) {
//     showSlider(sliderIndex = n)
//     var i
//     var sldes = document.getElementsByClassName("slider-track")
//     // var dots = document.getElementsByClassName("dot")
 
// if (n >slides.length) {
//     sliderIndex = 1
// }

// if (n < 1) {
//     sliderIndex = slides.length
// }

// for (i = 0; i < slides.length ; i++){
//     slides[i].style.display= "none";
// }
// slides[sliderIndex-1].style.display = "block";

// }
 
let position = 0;
const sliderToShow = 2;
const sliderToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / sliderToShow;
const movePosition = sliderToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}`;

});

btnNext.addEventListener('click', () => {
    const itemsleft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;

    position -= itemsleft >= sliderToScroll ? movePosition : itemsleft * itemWidth;
    
    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsleft = (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;

    position += itemsleft >= sliderToScroll ? movePosition : itemsleft * itemWidth;

    setPosition();
    checkBtns();
});
const setPosition = () => {
    track.style.transform = `translaterX(${position}px)`;
};

const checkBtns = () => { 
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= - (itemsCount - sliderToShow) * itemWidth;
}