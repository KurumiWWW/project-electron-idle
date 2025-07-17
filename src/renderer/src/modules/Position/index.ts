/* 地点
 * 区域中的某些地点
 * 在探索途中以卡牌形式出现 */

export interface Position {
  name: string // 地点名称
  prob: number[] // 概率
}
