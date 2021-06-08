export class Food {
  element: HTMLElement;
  
  constructor() {
    
    this.element = document.getElementById('food')!;
    this.change()
  }
  // 定义一个获取食物x轴的坐标方法

  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }
  // 改变食物位置
  change() {
    let top = Math.round(Math.random()*29)*10 + 'px'
    let left = Math.round(Math.random()*29)*10 + 'px'


    this.element.style.left = left
    this.element.style.top = top
  }
}
