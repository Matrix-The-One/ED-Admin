import type { ActionType, ProTableProps } from '@ant-design/pro-components'
import { ProTable as AntProTable } from '@ant-design/pro-components'
import { useRef } from 'react'
import styles from './index.less'
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
      bordered
      rowKey='id'
      size='small'
      options={false}
      defaultSize='large'
      dateFormatter='string'
      actionRef={proActionRef}
      form={{ ignoreRules: false }}
      search={{
        labelWidth: 'auto',
        span: { xs: 12, sm: 8, md: 8, lg: 8, xl: 6, xxl: 4 },
      }}
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
      rowClassName={(record, index) => index % 2 && styles.odd}
      {...rest}
      className={styles.container}
    />
  )
}

export default ProTable
