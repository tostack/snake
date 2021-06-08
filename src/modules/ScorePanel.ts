class ScorePanel {
  // 记录分数和等级
  score = 0
  level = 1
  // 分数和等级所在的元素
  scoreEle: Element
  levelEle: Element
  // maxLevel
  maxLevel: number
  // upscore
  upScore:number
  constructor(maxLevel = 10, upScore=10) {
    this.upScore = upScore
    this.maxLevel = maxLevel
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
  }

  addscore() {
    this.scoreEle.innerHTML ='SCORE:' + ++this.score
    if (this.score % this.upScore === 0) {
      this.levelup()
    }
  }
  levelup() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = 'LEVEL:' + ++this.level 
    }
  }

}
export default ScorePanel