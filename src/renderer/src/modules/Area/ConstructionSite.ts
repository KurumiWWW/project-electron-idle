import { Area, AreaLevel } from '@renderer/modules/Area/index'
import { IPosition } from '@renderer/modules/Position'

const cards: IPosition[] = [
  // {
  //   id: 'cs-1',
  //   name: 'area.construction.tool_room',
  //   prob: [0, 30]
  // },
  // {
  //   id: 'cs-2',
  //   name: 'area.construction.rest_room',
  //   prob: [31, 40]
  // },
  // {
  //   id: 'cs-3',
  //   name: 'area.construction.manager_room',
  //   prob: [41, 45]
  // },
  // {
  //   id: 'cs-4',
  //   name: 'area.construction.building',
  //   prob: [46, 85]
  // }
]

export class AreaConstructionSite extends Area {
  constructor(level: AreaLevel) {
    super({
      id: '1',
      name: 'area.construction.name',
      level,
      cards: cards,
      range: [0, 85]
    })
  }
}
