import _ from 'lodash'

/* 地点
 * 区域中的某些地点
 * 在探索途中以卡牌形式出现 */

export interface IPosition {
  id: string
  name: string // 地点名称
  prob: number[] // 概率
  fight: number // 战斗概率 -1 ~ 100 的数字 使用1d100进行判定 -1为无战斗 仅判断一次
  search: number // 搜索概率 -1 ~ 100 的数字 使用1d100进行判定 -1为无搜索 判断多次
  search_times_min: number // 最少搜索次数 超过该次数后若搜索行为判定失败则结束搜索
  rollFight?: () => Promise<boolean>
  rollSearch?: () => Promise<boolean>
}

export class Position {
  id: string
  name: string
  prob: number[]
  fight: number
  search: number
  search_times_min: number

  // 掷骰
  public roll(prob: number): Promise<boolean> {
    return new Promise((resolve) => {
      if (prob < 0) {
        resolve(false)
      } else {
        resolve(_.random(1, 100) <= prob)
      }
    })
  }

  rollFight(): Promise<boolean> {
    return this.roll(this.fight)
  }

  rollSearch(): Promise<boolean> {
    return this.roll(this.search)
  }

  constructor(obj: IPosition) {
    this.id = obj.id
    this.name = obj.name
    this.prob = obj.prob
    this.fight = obj.fight
    this.search = obj.search
    this.search_times_min = obj.search_times_min
  }
}

let currentPosition: Position

export function getPosition(obj: IPosition): Promise<Position> {
  return new Promise((resolve) => {
    currentPosition = new Position(obj)
    resolve(currentPosition)
  })
}
