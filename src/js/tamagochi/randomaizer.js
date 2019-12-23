export default class Randomaizer {
    static getRandom(min, max) {
        return Math.round(min + Math.random() * (max - min))
    }
}