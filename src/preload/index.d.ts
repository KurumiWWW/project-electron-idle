import { ElectronAPI } from '@electron-toolkit/preload'
import { Area } from '../main/modules/Area'
import { IPosition as Position } from '../main/modules/Position'

declare global {
  interface Window {
    electron: ElectronAPI | any
    api: {
      ping: () => Promise<string>
      getAreaInstance: (...args) => Promise<IArea>
      getPosition: (obj: object) => Promise<IPosition>
    }
  }

  interface IPosition extends Position {
  }

  interface IArea extends Area {
  }
}
