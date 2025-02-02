import Animation from '../base/animation'
import DataBus   from '../databus'
import Enemy_bullet   from './enemy_bullet'
import Hp_re from '../item/hp_re'

const ENEMY_IMG_SRC = 'images/enemy.png'
const ENEMY_WIDTH   = 60
const ENEMY_HEIGHT  = 60

const __ = {
  speed: Symbol('speed')
}

let databus = new DataBus()

function rnd(start, end){
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Enemy extends Animation {
  constructor() {
    super(ENEMY_IMG_SRC, ENEMY_WIDTH, ENEMY_HEIGHT)
    this.Enemy_bullets=[];
    this.Hp_re=[]
    this.initExplosionAnimation()
  }

  init(speed) {
    this.x = rnd(0, window.innerWidth - ENEMY_WIDTH)
    this.y = -this.height

    this[__.speed] = speed

    this.visible = true
  }

  // 预定义爆炸的帧动画
  initExplosionAnimation() {
    let frames = []

    const EXPLO_IMG_PREFIX  = 'images/explosion'
    const EXPLO_FRAME_COUNT = 19

    for ( let i = 0;i < EXPLO_FRAME_COUNT;i++ ) {
      frames.push(EXPLO_IMG_PREFIX + (i + 1) + '.png')
    }

    this.initFrames(frames)
  }

  // 每一帧更新敌机的位置
  update() {
    this.y += this[__.speed]

    // 对象回收
    if ( this.y > window.innerHeight + this.height )
      databus.removeEnemey(this)
  }
  enemy_shoot() {
    
    let enemy_bullet = databus.pool.getItemByClass('enemy_bullet', Enemy_bullet)

    enemy_bullet.init(
      this.x + this.width / 2 - enemy_bullet.width / 2,
      this.y - 10,
      7
    )
    //console.log(enemy_bullet)
    databus.enemy_bullets.push(enemy_bullet)
    
  }
  enemy_drop(){
   console.log(databus.hp_re)
    databus.hp_re.init(
      this.x + this.width / 2 - hp_re.width / 2,
      this.y - 10,
      2
    )
    
  }
  
}

