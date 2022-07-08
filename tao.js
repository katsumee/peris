const firstImg = document.querySelector('.first-img');
const leftbaton = document.querySelector('#left');
const rightbaton = document.querySelector('#right');

let leftMargin = 0;

leftbaton.onclick = () => {
    leftMargin = leftMargin - 400;
    firstImg.style.marginLeft = leftMargin + 'px';
    
}

let rightMargin = 0;

rightbaton.onclick = () => {
    rightMargin = rightMargin + 400;
    firstImg.style.marginRight = rightMargin + 'px';
}