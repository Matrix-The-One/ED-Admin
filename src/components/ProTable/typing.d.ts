export type ParamsType = Record<string, any>
export type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>>
export type FilterUndefined<T> = T extends undefined ? never : T

export type IProps = Partial<{
  /**
   * @name 转换参数
   */
  convertParams: Partial<{
    current: string
    pageSize: string
    data: string
    total: string
    success: string
  }>
  /**
   * @name 过滤空值
   * @deprecated 过滤空字符串与空数组
   */
  filterNullValues: boolean
}>

export type Params = ParamsType & {
  pageSize?: number | undefined
  current?: number | undefined
  keyword?: string | undefined
}

export type MergeParams = FilterUndefined<Required<IProps['convertParams']>>
