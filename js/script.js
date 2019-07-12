//DOM Elements

const burgerBtn = document.querySelector('.btn-burger');
const navigation = document.querySelector('.main-nav');
const toTopBtn = document.querySelector('.btn-to-top');


//Burger Manipulation

burgerBtn.addEventListener( 'click', () => {
    burgerBtn.classList.toggle('btn-burger--active');
    navigation.classList.toggle('main-nav--active');
});

//Scroll to top

toTopBtn.addEventListener('click', up);



let t;
function up() {
  const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-70);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}




