export default class TurnTimer {
    constructor(delay) {
        this.delay = delay;
        this.timeoutID = null;
    }

    startTimer(func) {
        this.timeoutID = setTimeout(func, this.delay);
    }

    stopTimer() {
        clearTimeout(this.timeoutID);
    }
}