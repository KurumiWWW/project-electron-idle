import { JSX, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AreaConstructionSite } from '@renderer/modules/Area/ConstructionSite'

const area = new AreaConstructionSite('I')

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
