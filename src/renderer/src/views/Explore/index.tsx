import { JSX, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Explore(): JSX.Element {
  const [currentPosition, setCurrentPosition] = useState<IPosition | undefined>()
  const { t } = useTranslation()

  //
  async function onDraw(): Promise<void> {
    // if (card) {
    //   const position = new Position(card)
    //   position.name = t(position.name)
    //   setCurrentPosition(position)
    // }
    const area: IArea = await window.api.getAreaInstance('constructionSite', 'I')
    const card = area.draw()
    const position = await window.api.getPosition(card)
    position.name = t(position.name)
    setCurrentPosition(position)
  }

  //
  // async function onSearch(): Promise<void> {
  //   // 先判定是否发生战斗
  //   // const isFight = await currentPosition?.rollFight()
  // }
  return (
    <>
      <button onClick={onDraw}>draw</button>
      <div>{currentPosition?.name}</div>
    </>
  )
}
