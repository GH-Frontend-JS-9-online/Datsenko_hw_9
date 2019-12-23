




function f () {
    let startTime = new Date()    
    setTimeout(() => {
        let t = new Timer(startTime)
        console.log(t.timeAfterStart())
    }, 5000)

}






class Timer {
    constructor(startDate) {
        let newDate = new Date(new Date() - startDate)
        this.seconds = newDate.getSeconds()
        this.minutes = newDate.getMinutes()
    }
    
    timeAfterStart() {
        return `${this.minutes}:${this.seconds}`
    }
}


f()

