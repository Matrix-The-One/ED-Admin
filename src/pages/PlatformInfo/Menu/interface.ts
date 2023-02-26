import type { ActionType } from '@ant-design/pro-components'

export type IList = {
  id?: string
  parentId?: string
  title?: string
  icon?: string
  route?: string
  component?: string
  isHidden?: boolean
  createTime?: string
  children?: IList[]
}

export interface IOperationProps {
  record: IList
  action?: ActionType
}
