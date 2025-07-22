import { ipcMain, ipcRenderer } from 'electron'
import { getArea } from './modules/Area'
import { getPosition } from './modules/Position'

export default function (): void {
  // ipc test
  ipcMain.handle('ping', () => '123')

  ipcMain.handle('getAreaInstance', (_event, areaName, level) => getArea(areaName, level))
  ipcMain.handle('getPosition', (_event, obj) => getPosition(obj))
}

// Custom APIs for renderer
export const customAPI = {
  ping: () => ipcRenderer.invoke('ping'),
  getAreaInstance: (areaName: string, level: string) =>
    ipcRenderer.invoke('getAreaInstance', areaName, level)
}
