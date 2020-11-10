export class DateTimeConversion {
  time


  constructor(time = 0) {
    this.time = time
  }

  formatDate () {
    const day = this.#addZero(Math.floor(this.time / (60 * 60 * 24)))
    const hours = this.#addZero(Math.floor(this.time / (60 * 60) % 24))
    const minutes = this.#addZero(Math.floor(this.time / 60 % 60))
    return `${day}天${hours}小时${minutes}分钟`
  }

  #addZero (val) {
    return val < 10 ? `0${val}` : val
  }

}

