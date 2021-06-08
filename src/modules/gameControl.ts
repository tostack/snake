import { Food } from './Food'
import Snake from './Snake';
import ScorePanel from './ScorePanel';

// 游戏控制器，控制其他所有类
class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel

  // 
  direction = ''
  isLive = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()


    this.init()
  }
  init() {
    document.addEventListener('keydown',this.keydownHandler.bind(this))
    this.run()
  }
  // 键盘按键响应函数
  keydownHandler(event: KeyboardEvent) {
    
    this.direction = event.key
    /*
    ArrowUp
    ArrowLeft
    ArrowDown
    ArrowRight
    */
    
    console.log(event.key)
  }
  run() {
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        // this.direction = event.key
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        // this.direction = event.key
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10
        // this.direction = event.key
        break;
      case 'ArrowDown':
      case 'Down':
        Y +=10
        // this.direction = event.key
        break;
    }
    this.checkEat(this.food.X, this.food.Y)
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (error) {
      alert(error)
      this.isLive = false
    }
    console.log(this.food.X,this.food.Y)
    this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1)*30)
    // if(this.direction === 'ArrowUp' ||this.direction === 'Up')
  }
  checkEat(X: number, Y: number) {
    console.log(this.snake.X, this.snake.Y)
    if (this.snake.X === X && this.snake.Y === Y) {
      this.snake.addBody()
      this.food.change()
      this.scorePanel.addscore()
    }
    
    return 
  }
  checkHeadBody() {
    // if(this.X)
    for (let i = 0; i < this.snake.bodies.length; ++i){
      let ot = this.snake.bodies[i] as HTMLElement;
      if (ot.offsetTop === this.snake.X && ot.offsetLeft === this.snake.Y) {
        throw new Error('吃到自己了')
      }
    }
  }
}

export default GameControl