export default class Timer {
    constructor(startDate) {
        let newDate = new Date(new Date() - startDate)
        this.seconds = newDate.getSeconds()
        this.minutes = newDate.getMinutes()
    }

    timeAfterStart() {
        return `${this.minutes}:${this.seconds}`
    }
}