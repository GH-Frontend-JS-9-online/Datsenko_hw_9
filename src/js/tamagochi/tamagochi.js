import Randomaizer from './randomaizer.js'


export default class Tamagochi {
    constructor() {
        this.food = Randomaizer.getRandom(50, 100)
        this.clean = Randomaizer.getRandom(50, 100)
        this.happiness = Randomaizer.getRandom(50, 100)
        this.health = Randomaizer.getRandom(50, 100)
        this.socialization = Randomaizer.getRandom(50, 100)
        this.money = Randomaizer.getRandom(50, 100)
    }

    eat() {
        this.food += 30
        this.clean -= 20 
    }

    wash() {
        this.clean += 40
        this.happiness -= 20
    }

    run() {
        this.happiness += 15
        this.food -= 10
    }
    
    visitDoctor() {
        this.health += 30
        this.money -=20
    }

    goToBar () {
        this.socialization += 40
        this.food += 10
        this.money -= 20
        this.health -= 10
    }

    goToWork () {
        this.money += 50
        this.food -= 10
        this.health -= 10
        this.socialization -= 20
    }

    buyFood() {
        this.food += 20 
        this.money -= 20
    }

    startBusiness () {
        this.money += 100
        this.happiness += 100
        this.health -= 100
        this.socialization += 20
    }

    getFood() { 
        this.food = this.checkValue(this.food)             
        return this.food
    }

    getHappiness() { 
        this.happiness = this.checkValue(this.happiness)               
        return this.happiness
    }

    getClean() { 
        this.clean = this.checkValue(this.clean)      
        return this.clean
    } 

    getHealth() { 
        this.health = this.checkValue(this.health)      
        return this.health
    } 

    getSocialization() { 
        this.socialization = this.checkValue(this.socialization)      
        return this.socialization
    } 

    getMoney() { 
        this.money = this.checkValue(this.money)      
        return this.money
    } 
    
    checkValue(value) {
        return (value >= 100) ? 100 : (value <= 0) ? 0 : value 
    }

}