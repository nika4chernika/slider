// кнопки сверху 
const buttonRostovAdmiral = document.querySelector('.rostov-admiral')
const buttonSochi = document.querySelector('.sochi-thieves')
const buttonRostovPatriotic = document.querySelector('.rostov-patriotic')
// точки снизу
const dotOne = document.querySelector('.c-one')
const dotTwo = document.querySelector('.c-two')
const dotThree = document.querySelector('.c-three')
// дескрипторы
const descripter = document.querySelectorAll('.descripter-text')
const city = document.querySelector('.d-city')
const area = document.querySelector('.d-area')
const time = document.querySelector('.d-time')
const cost = document.querySelector('.d-cost')
// изображения
const imgWrapper = document.querySelector('.img-wrapper')
// стрелки
const arrowLeft = document.querySelector('.arr-left')
const arrowRight = document.querySelector('.arr-right')


// функции смены контента

let changeToSochi = function () {
    buttonRostovAdmiral.classList.remove('activ-button')
    buttonSochi.classList.add('activ-button')
    buttonRostovPatriotic.classList.remove('activ-button')
    imgWrapper.innerHTML = ''
    imgWrapper.innerHTML = `<img class="img-content" src="./images/image2.png" alt="homestaging">`
    descripter.innerHTML = ''
    city.innerHTML = `<p class="descripter d-city">Sochi <br>Thieves</p>`
    area.innerHTML = `<p class="descripter d-area">105 m2</p>`
    time.innerHTML = `<p class="descripter d-time">4 months</p>`
    dotOne.classList.remove('active')
    dotTwo.classList.add('active')
    dotThree.classList.remove('active')
}

let changeToRndPatriotic = function () {
    buttonRostovAdmiral.classList.remove('activ-button')
    buttonSochi.classList.remove('activ-button')
    buttonRostovPatriotic.classList.add('activ-button')
    imgWrapper.innerHTML = ''
    imgWrapper.innerHTML = `<img class="img-content" src="./images/image3.png" alt="homestaging">`
    descripter.innerHTML = ''
    city.innerHTML = `<p class="descripter d-city">Rostov-on-Don <br>Patriotic</p>`
    area.innerHTML = `<p class="descripter d-area">93 m2</p>`
    time.innerHTML = `<p class="descripter d-time">3 months</p>`
    dotOne.classList.remove('active')
    dotTwo.classList.remove('active')
    dotThree.classList.add('active')
}

let changeToRndAdmiral = function () {
    buttonRostovAdmiral.classList.add('activ-button')
    buttonSochi.classList.remove('activ-button')
    buttonRostovPatriotic.classList.remove('activ-button')
    imgWrapper.innerHTML = ''
    imgWrapper.innerHTML = `<img class="img-content" src="./images/image1.png" alt="homestaging">`
    descripter.innerHTML = ''
    city.innerHTML = `<p class="descripter d-city">Rostov-on-Don <br>LCD admiral</p>`
    area.innerHTML = `<p class="descripter d-area">81 m2</p>`
    time.innerHTML = `<p class="descripter d-time">3.5 months</p>`
    dotOne.classList.add('active')
    dotTwo.classList.remove('active')
    dotThree.classList.remove('active')
}

// кнопки функции
buttonSochi.addEventListener('click', () => {
    changeToSochi()
})

buttonRostovPatriotic.addEventListener('click', () => {
    changeToRndPatriotic()
})

buttonRostovAdmiral.addEventListener('click', () => {
    changeToRndAdmiral()
})

// кнопки точки

dotTwo.addEventListener('click', () => {
    changeToSochi()
})

dotThree.addEventListener('click', () => {
    changeToRndPatriotic()
})

dotOne.addEventListener('click', () => {
    changeToRndAdmiral()
})


// слайдер стрелки 
const entities = [
    {
      city: 'Rostov-on-Don LCD admiral',
      area: '81 m2',
      time: '3.5 months',
      imgWrapper: `<img class="img-content" src="./images/image1.png" alt="homestaging">`,
    },
    {
      city: 'Sochi Thieves',
      area: '105 m2',
      time: '4 months',
      imgWrapper: `<img class="img-content" src="./images/image2.png" alt="homestaging">`
    },
    {
      city: 'Rostov-on-Don Patriotic',
      area: '93 m2',
      time: '3 months',
      imgWrapper: `<img class="img-content" src="./images/image3.png" alt="homestaging">`
    },
]
  
const setEntity = (index) => {
    city.innerText = entities[index].city
    area.innerText = entities[index].area
    time.innerText = entities[index].time
    imgWrapper.innerHTML = entities[index].imgWrapper
    if(index === 0) {
        return changeToRndAdmiral()
    }
    if(currentIndex === 1) {
        return changeToSochi()
    }
    if(index === 2) {
        return changeToRndPatriotic() 
    }
}
  
const prev = document.querySelector('.arr-left')
const next = document.querySelector('.arr-right')
let currentIndex = 0
  
prev.addEventListener('click', () => {
    if(currentIndex === 0) {
        currentIndex = 2
       return setEntity(2) 
    } 
    if(currentIndex === 1) {
        currentIndex = 0
        return setEntity(0) 
    } 
    if (currentIndex === 2) {
        currentIndex = 1
        return setEntity(1) 
    }
    console.log(currentIndex)
    setEntity(currentIndex);
})

next.addEventListener('click', () => {
    if(currentIndex === 0) {
        currentIndex = 1
       return setEntity(1) 
    } 
    if(currentIndex === 1) {
        currentIndex = 2
        return setEntity(2) 
    } 
    if (currentIndex === 2) {
        currentIndex = 0
        return setEntity(0) 
    }
    console.log(currentIndex)
    setEntity(currentIndex);
})

