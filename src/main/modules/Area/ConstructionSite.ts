import { Area, AreaLevel } from '../Area'
import { IPosition } from '../Position'

const cards: IPosition[] = [
  {
    id: 'cs-1',
    name: 'area.construction.tool_room',
    prob: [0, 30],
    fight: 20,
    search: 80,
    search_times_min: 3
  },
  {
    id: 'cs-2',
    name: 'area.construction.rest_room',
    prob: [31, 40],
    fight: 20,
    search: 80,
    search_times_min: 3
  },
  {
    id: 'cs-3',
    name: 'area.construction.manager_room',
    prob: [41, 45],
    fight: 20,
    search: 80,
    search_times_min: 3
  },
  {
    id: 'cs-4',
    name: 'area.construction.building',
    prob: [46, 85],
    fight: 20,
    search: 80,
    search_times_min: 3
  }
]

export class AreaConstructionSite extends Area {
  constructor(level: AreaLevel) {
    super({
      id: '1',
      name: 'area.construction.name',
      level,
      cards: cards,
      range: [0, 85],
    })
  }
}

let areaConstructionSite: AreaConstructionSite

export function getAreaInstance(level: AreaLevel): AreaConstructionSite {
  areaConstructionSite = new AreaConstructionSite(level)
  return areaConstructionSite
}
