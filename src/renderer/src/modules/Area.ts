import _ from 'lodash'
import { Position } from '@renderer/modules/Position'
/* 地图中可探索区域为Area
 * 整张地图由Area（区域）组成，
 * 而Area由Position（地点）组成 */

/* 地区等级
 * 地区等级会对探索难度造成不同程度的影响 */

export type AreaLevel = 'I' | 'II' | 'III'

export interface IArea {
  name: string // 区域名称
  level: AreaLevel
  cards: Position[]
  range: number[]
}

export class Area {
  name: string
  level: AreaLevel
  cards: Position[]
  range: number[]

  // 抽卡
  public draw(): Position | undefined {
    const n = _.random(this.range[0], this.range[1])
    return this.cards.find((card) => n >= card.prob[0] && n <= card.prob[1])
  }

  constructor(obj: IArea) {
    this.name = obj.name
    this.level = obj.level
    this.cards = obj.cards
    this.range = obj.range
  }
}

export class areaConstructionSite extends Area {
  constructor(level: AreaLevel) {
    console.log('new areaConstructionSite')
    super({
      name: 'area.construction.name',
      level,
      cards: [
        {
          name: 'area.construction.tool_room',
          prob: [0, 30]
        },
        {
          name: 'area.construction.rest_room',
          prob: [31, 40]
        },
        {
          name: 'area.construction.manager_room',
          prob: [41, 45]
        },
        {
          name: 'area.construction.building',
          prob: [46, 85]
        }
      ],
      range: [0, 85]
    })
  }
}
