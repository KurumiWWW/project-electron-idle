import _ from 'lodash'
import { IPosition } from '../Position'

/* 地图中可探索区域为Area
 * 整张地图由Area（区域）组成，
 * 而Area由Position（地点）组成 */

/* 地区等级
 * 地区等级会对探索难度造成不同程度的影响 */

export type AreaLevel = 'I' | 'II' | 'III'

export interface IArea {
  id: string
  name: string // 区域名称
  level: AreaLevel
  cards: IPosition[]
  range: number[]
}

export class Area {
  id: string
  name: string
  level: AreaLevel
  cards: IPosition[]
  range: number[]

  // 抽卡
  public draw(): IPosition {
    const n = _.random(this.range[0], this.range[1])
    return this.cards.find((card) => n >= card.prob[0] && n <= card.prob[1]) as IPosition
  }

  constructor(obj: IArea) {
    this.id = obj.id
    this.name = obj.name
    this.level = obj.level
    this.cards = obj.cards
    this.range = obj.range
  }
}

export function getArea(areaName: string, level: AreaLevel): Promise<Area> {
  const areas = {
    constructionSite: import('./ConstructionSite')
  }
  return new Promise((resolve, reject) => {
    if (!areas[areaName]) {
      reject(new Error('areaName is required'))
    }
    if (!level) {
      reject(new Error('level is required'))
    }
    areas[areaName].then((res: { getAreaInstance: (arg0: string) => Area | PromiseLike<Area> }) => {
      resolve(res.getAreaInstance(level))
    })
  })
}
