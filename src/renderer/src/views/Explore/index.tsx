import { areaConstructionSite } from '@renderer/modules/Area'
import { JSX, useState } from 'react'
import { useTranslation } from 'react-i18next'

const area = new areaConstructionSite('I')

export function Explore(): JSX.Element {
  const [card, setCard] = useState('')
  const { t } = useTranslation()

  function onDraw(): void {
    setCard(t(area.draw()?.name || ''))
  }

  return (
    <>
      <button onClick={onDraw}>抽卡</button>
      <div>当前位置：{card}</div>
    </>
  )
}
