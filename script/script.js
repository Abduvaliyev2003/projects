const products = {
    plainBurger: {
       name: 'GAMBURGER',
       price: 10000,
       amount: 0,
       kall: 350,
       suma: function () {
           return this.price * this.amount
       },
       get KALLOR() {
           return this.kall * this.amount
       }
    },
    freshBurger: {
        name: 'freshBurger',
        price: 20500,
        amount: 0,
        kall: 350,
        suma: function () {
            return this.price * this.amount
        },
        get KALLOR() {
            return this.kall * this.amount
        }
     },
     freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        amount: 0,
        kall: 480,
        suma: function () {
            return this.price * this.amount
        },
        get KALLOR() {
            return this.kall * this.amount
        }
     } 
}
let timer = document.querySelector('.header__timer-extra');
 function  ssa() {
     if (timer.innerHTML < 100){
         timer.innerHTML++;
         if (timer.innerHTML < 80){
             setTimeout(() => {
                 ssa()
             }, 100)
         } else {
            setTimeout(() => {
                ssa()
            }, 450)
         }
     } 
     
 }
 ssa();






// const mainProductBtn = document.querySelectorAll('.main__product-btn')

// mainProductBtn.forEach((el, i) => {
//      el.addEventListener('click', () => {
//          let parent = el.closest('')
//      })
// })

// main__product  info



   
    const mainProductInfo = document.querySelectorAll('.main__product-info');
const view = document.querySelector('.view');
const close = document.querySelector('.close');
mainProductInfo.forEach((el, i) => {
    el.addEventListener('click', () => {
     let mainProductImg = el.querySelector('.main__product-img');
     let imgSrc = mainProductImg.getAttribute('src');
     view.classList.add('active') 
     view.querySelector('img').src = imgSrc;
    
       
    });
})

close.addEventListener('click', () => {
    view.classList.remove('active')
})
