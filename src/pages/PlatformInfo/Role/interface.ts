import type { ActionType } from '@ant-design/pro-components'

export type IList = {
  id?: string
  name?: string
  description?: string
  enable?: boolean
  createTime?: string
}

export interface IOperationProps {
  record: IList
  action?: ActionType
}
