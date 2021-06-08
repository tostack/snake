class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  element: HTMLElement

  constructor() {
    this.element = document.getElementById('snake') as HTMLElement
    this.head = document.querySelector('#snake > div') as HTMLElement
    // queryAllSelector 使用的细节，该方法返回的是一个NodeList，该Nodelist不会动态增加
    // this.bodies = document.querySelector('#snake')
    this.bodies = this.element.getElementsByTagName('div') as HTMLCollection
  }
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }

  set X(val) {
    
    if (this.X === val) {
      return 
    }
    if (val > 290 || val < 0) {
      throw new Error('snake is Dead')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
      console.log('发生了掉头')
      if (val > this.X) {
        val = this.X - 10
      } else {
        val = this.X + 10
      }
    }
    // 移动身体
    this.moveBody()
    this.head.style.left = val + 'px'
  }
  
  set Y(val) {
    
    if (this.Y === val) {
      return
    }
    if (val > 290 || val < 0) {
      throw Error('snake is Dead')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
      console.log('发生了掉头')
      if (val > this.Y) {  //此时蛇头想要向下掉头
        val = this.Y - 10 // 阻止掉头
      } else { //此时蛇头想要向上掉头
        val = this.Y - 10 // 阻止掉头
      }
    }
    // 移动身体
    this.moveBody()
    this.head.style.top = val + 'px'
  }
  addBody() {
    // 向sanke尾部位置添加 div
    this.element.insertAdjacentHTML("beforeend", '<div></div>')
  }
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; --i) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft; // 做断言
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      console.log(this.bodies);
      // 设置到当前身体
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      // (this.bodies[i-1] as HTMLElement).style.top = Y +'px'
      // (this.bodies[i] as HTMLElement).style.left = X + 'px'

    }
    // if (this.bodies.length > 0) {
      // this.bodies[this.bodies.length-1].offset
    // }
  }
}


export default Snake