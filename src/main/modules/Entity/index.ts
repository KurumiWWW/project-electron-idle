/* 实体
 * 几乎包含一切人类/怪物单位 */

import Decimal from 'decimal.js'

export interface IEntity {
  id: string
  name: string
  level: number
  base_hp: number
}

export class Entity {
  id: string
  name: string
  level: Decimal
  base_hp: Decimal
  hp: Decimal | undefined

  private initHp(): void {
    // logger.info(this.level)
    const increase = Decimal.log(this.level, 3).mul(100)
    this.hp = Decimal.add(this.base_hp, increase).ceil()
  }

  constructor(obj: IEntity) {
    this.id = obj.id
    this.name = obj.name
    this.level = new Decimal(obj.level)
    this.base_hp = new Decimal(obj.base_hp)
    this.initHp()
  }
}

// export function getEntity() {
//   let entity = new Entity({
//     id: '1',
//     name: 'test',
//     level: 1,
//     base_hp: 100
//   })
//   for (let i = 0; i <= 20; i++) {
//     entity = new Entity({
//       id: i.toString(),
//       name: 'test',
//       level: 1 + i,
//       base_hp: 100
//     })
//     logger.info(entity.level.toString(), entity.hp?.toString())
//   }
// }
