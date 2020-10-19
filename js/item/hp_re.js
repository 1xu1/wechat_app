import Sprite   from '../base/sprite'
import DataBus  from '../databus'

const BULLET_IMG_SRC = 'images/hp_re.png'
const BULLET_WIDTH   = 16
const BULLET_HEIGHT  = 30

const __ = {
  speed: Symbol('speed')
}

//let databus = new DataBus()

export default class Hp_re extends Sprite {
  
  constructor(x,y,speed) {
    super(BULLET_IMG_SRC, BULLET_WIDTH, BULLET_HEIGHT)
   this.visible=false
   this.x
   this.y=y
   this[__.speed] = speed
  }

  init(x, y, speed) {
    this.x = x
    this.y = y

    this[__.speed] = speed

    this.visible = true
  }

  // 每一帧更新位置
  update() {
    this.y += this[__.speed]
    // 超出屏幕外回收自身
  //console.log("y="+this.y)
    if ( this.y > 2000 )
     this.visible=false
  }
  
}