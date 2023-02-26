import type { MergeParams, Params } from './typing'

export const generateParams = (
  params: Params,
  mergeParams: MergeParams,
  filterNullValues: boolean,
): Params => {
  const { current, pageSize, ...rest } = params
  const filterParams = Object.entries(rest).reduce((acc, [key, value]) => {
    if ((typeof value === 'string' || Array.isArray(value)) && !value?.length) {
      return acc
    }

    return { ...acc, [key]: value }
  }, {})

  return {
    [mergeParams.current]: current,
    [mergeParams.pageSize]: pageSize,
    ...(filterNullValues ? filterParams : rest),
  }
}

export const safeGetValue = <T>(
  source: Record<string, any>,
  prop: string,
  underwriteValue?: any,
): T => {
  const keys = prop.split('.')
  let res: any = source

  keys.forEach(k => {
    const curData = res?.[k]
    res = curData || underwriteValue
  })

  return res
}
