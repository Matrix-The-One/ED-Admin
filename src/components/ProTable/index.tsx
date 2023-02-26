import { useRef } from 'react'
import { ProTable as AntProTable } from '@ant-design/pro-components'
import type { ActionType } from '@ant-design/pro-components'
import type { ProTableProps } from '@ant-design/pro-components'
import type { IProps, ParamsType, RequiredPick } from './typing'
import { generateParams, safeGetValue } from './utils'

const defaultConvertParams = {
  current: 'current',
  pageSize: 'pageSize',
  data: 'data',
  total: 'total',
  success: 'success',
}

const ProTable = <
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = 'text',
>({
  request,
  actionRef,
  convertParams,
  filterNullValues = true,
  ...rest
}: ProTableProps<DataType, Params, ValueType> &
  RequiredPick<ProTableProps<DataType, Params, ValueType>, 'request'> &
  IProps) => {
  const innerActionRef = useRef<ActionType>()
  const proActionRef =
    (actionRef as ReturnType<typeof useRef<ActionType>>) || innerActionRef

  return (
    <AntProTable<DataType, Params, ValueType>
      rowKey='id'
      cardBordered
      defaultSize='large'
      dateFormatter='string'
      actionRef={proActionRef}
      form={{ ignoreRules: false }}
      editable={{ type: 'multiple' }}
      pagination={{ defaultPageSize: 10 }}
      request={async (params, ...restParams) => {
        const mergeParams = { ...defaultConvertParams, ...convertParams }
        const { success, data, total } = mergeParams
        const gParams = generateParams(
          params,
          mergeParams,
          filterNullValues,
        ) as Params

        const res = await request(gParams, ...restParams)
        const safeData = safeGetValue<DataType[]>(res, data, [])

        // 删除最后一项自动翻页
        if (!safeData.length && (params.current || 1) > 1) {
          proActionRef.current!.pageInfo!.current -= 1
        }

        return {
          data: safeData,
          total: safeGetValue<number>(res, total, safeData.length),
          success: safeGetValue<boolean>(res, success, false),
        }
      }}
      {...rest}
    />
  )
}

export default ProTable
