import Tamagochi from './tamagochi.js'

document.addEventListener('DOMContentLoaded', () => {

    const foodItem = document.querySelector('.food-item')
    const cleanItem = document.querySelector('.clean-item')
    const happinessItem = document.querySelector('.happiness-item')
    const healthItem = document.querySelector('.health-item')
    const socializationItem = document.querySelector('.socialization-item')
    const moneyItem = document.querySelector('.money-item')

    const selectLevel = document.querySelector('.custom-select')
    const btnGrup = document.querySelector('.btn-group')

    const tamagochi = new Tamagochi()

    foodItem.innerHTML = tamagochi.getFood()
    cleanItem.innerHTML = tamagochi.getClean()
    happinessItem.innerHTML = tamagochi.getHappiness()
    healthItem.innerHTML = tamagochi.getHealth()
    socializationItem.innerHTML = tamagochi.getSocialization()
    moneyItem.innerHTML = tamagochi.getMoney()

    const btnEat = document.querySelector('.eat-btn')
    const btnWash = document.querySelector('.wash-btn')
    const btnRun = document.querySelector('.run-btn')
    const btnVD = document.querySelector('.visit-doctor-btn')
    const btnGoBar = document.querySelector('.gobar-btn')
    const btnGoWork = document.querySelector('.gowork-btn')
    const btnByFood = document.querySelector('.buy-food-btn')
    const btnStartBusiness = document.querySelector('.start-business-btn')
    const btnStart = document.querySelector('.start-btn')

    btnEat.addEventListener('click', function () {
        tamagochi.eat()
        foodItem.innerHTML = tamagochi.getFood()
        cleanItem.innerHTML = tamagochi.getClean()
    })

    btnWash.addEventListener('click', function () {
        tamagochi.wash()
        cleanItem.innerHTML = tamagochi.getClean()
        happinessItem.innerHTML = tamagochi.getHappiness()
    })

    btnRun.addEventListener('click', function () {
        tamagochi.run()
        happinessItem.innerHTML = tamagochi.getHappiness()
        foodItem.innerHTML = tamagochi.getFood()
    })

    btnVD.addEventListener('click', function () {
        tamagochi.visitDoctor()
        healthItem.innerHTML = tamagochi.getHealth()
        moneyItem.innerHTML = tamagochi.getMoney()
    })

    btnGoBar.addEventListener('click', function () {
        tamagochi.goToBar()
        socializationItem.innerHTML = tamagochi.getSocialization()
        foodItem.innerHTML = tamagochi.getFood()
        moneyItem.innerHTML = tamagochi.getMoney()
        healthItem.innerHTML = tamagochi.getHealth()
    })

    btnGoWork.addEventListener('click', function () {
        tamagochi.goToWork()
        moneyItem.innerHTML = tamagochi.getMoney()
        foodItem.innerHTML = tamagochi.getFood()
        healthItem.innerHTML = tamagochi.getHealth()
        socializationItem.innerHTML = tamagochi.getSocialization()
    })

    btnByFood.addEventListener('click', function () {
        tamagochi.buyFood()
        foodItem.innerHTML = tamagochi.getFood()
        moneyItem.innerHTML = tamagochi.getMoney()
    })

    btnStartBusiness.addEventListener('click', function () {
        tamagochi.startBusiness()
        moneyItem.innerHTML = tamagochi.getMoney()
        happinessItem.innerHTML = tamagochi.getHappiness()        
        healthItem.innerHTML = tamagochi.getHealth()
        socializationItem.innerHTML = tamagochi.getSocialization()
    })

    btnStart.addEventListener('click', function () {
        (selectLevel.value !== 'Lazy' && selectLevel.value !== 'Pug') ?
        alert('Select level game'): startGame(tamagochi, selectLevel.value)
    })

    function checkResult(tamagochi) {
        if (tamagochi.getFood() <= 0 ||
            tamagochi.getClean() <= 0 ||
            tamagochi.getHappiness() <= 0 ||
            tamagochi.getHealth() <= 0 ||
            tamagochi.getSocialization() <= 0 ||
            tamagochi.getMoney() <= 0) {
            return true
        } else {
            return false
        }
    }

    function blockControlBtn() {
        selectLevel.removeAttribute('disabled')
        selectLevel.value = 'Select level game'
        btnGrup.querySelectorAll('button').forEach(button => {
            if (button.classList.contains('start-btn')) {
                button.removeAttribute('disabled')
            } else {
                button.setAttribute('disabled', '')
            }
        })
    }

    function unblockControlBtn() {
        selectLevel.setAttribute('disabled', '')
        btnGrup.querySelectorAll('button').forEach(button => {
            if (button.classList.contains('start-btn')) {
                button.setAttribute('disabled', '')
            } else {
                button.removeAttribute('disabled')
            }
        })
    }

    function newGame() {
        document.location.reload(true)
    }

    function showTotalTime(totalTime) {
        const element = document.querySelector('.total-time')
        element.innerHTML = `total time: ${totalTime}`
    }

    function startGame(tamagochi, levelGame) {
        let step = (levelGame === 'Lazy') ? 3 : 5
        unblockControlBtn()
        var amountTime = 0
        let timerId = setInterval(function () {
            tamagochi.food -= step
            tamagochi.clean -= step
            tamagochi.happiness -= step
            tamagochi.health -= step
            tamagochi.socialization -= step
            tamagochi.money -= step
            foodItem.innerHTML = tamagochi.getFood()
            cleanItem.innerHTML = tamagochi.getClean()
            happinessItem.innerHTML = tamagochi.getHappiness()
            healthItem.innerHTML = tamagochi.getHealth()
            socializationItem.innerHTML = tamagochi.getSocialization()
            moneyItem.innerHTML = tamagochi.getMoney()

            amountTime++
            if (checkResult(tamagochi)) {
                showTotalTime(amountTime * 1000)
                blockControlBtn()
                foodItem.innerHTML = 0
                cleanItem.innerHTML = 0
                happinessItem.innerHTML = 0
                setTimeout(newGame, 3000)
                clearInterval(timerId)
            }
        }, 5000)
    }

})