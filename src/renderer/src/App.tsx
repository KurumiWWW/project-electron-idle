import './i18n'
import React from 'react'
import { RouterProvider } from 'react-router'
import router from '@renderer/router'

// import styled from '@emotion/styled'

function setRem(): void {
  const winW = window.innerWidth
  const size = (100 * winW) / 1920
  const html = document.querySelector('html')
  if (html) {
    html.style.fontSize = `${size}px`
  }
}

setRem()
window.addEventListener('resize', () => {
  setRem()
})

function App(): React.JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  // const { t } = useTranslation()

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
