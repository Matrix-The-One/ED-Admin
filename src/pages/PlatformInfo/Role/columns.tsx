import { dateRanges } from '@/constants/date'
import type { ProColumns } from '@ant-design/pro-components'
import { useRequest } from 'ahooks'
import { Button, message, Popconfirm } from 'antd'
import EditRole from './components/EditRole'
import type { IList, IOperationProps } from './interface'

const UpdateEnableRequest = (p: any) =>
  new Promise<any>((r) => {
    setTimeout(() => r(p), 500)
  })

const Operation: React.FC<IOperationProps> = ({
  record: { id, enable },
  record,
  action,
}) => {
  const { run, loading } = useRequest(
    (enable) => UpdateEnableRequest({ id, enable }),
    {
      manual: true,
      onSuccess: () => {
        message.success(enable ? '禁用成功' : '启用成功')
        action?.reload()
      },
    },
  )

  return (
    <>
      <EditRole
        record={record}
        refresh={action?.reload}
        trigger={
          <Button type='link' size='small'>
            编辑
          </Button>
        }
      />
      {
        {
          true: (
            <Popconfirm
              title='确认要禁用此角色吗？'
              okText='确认'
              cancelText='取消'
              onConfirm={() => run(false)}
            >
              <Button danger type='link' size='small' loading={loading}>
                禁用
              </Button>
            </Popconfirm>
          ),
          false: (
            <Button
              type='link'
              size='small'
              loading={loading}
              onClick={() => run(true)}
            >
              启用
            </Button>
          ),
        }[`${enable}`!]
      }
      <Button
        type='link'
        size='small'
        onClick={() => message.warning('待开发')}
      >
        分配菜单
      </Button>
    </>
  )
}

export const generateColumns = (): ProColumns<IList>[] => [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '角色名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '角色描述',
    dataIndex: 'description',
    ellipsis: true,
    search: false,
    width: 200,
  },
  {
    title: '是否启用',
    dataIndex: 'enable',
    valueEnum: {
      true: {
        text: '是',
        status: 'Success',
      },
      false: {
        text: '否',
        status: 'Error',
      },
    },
    width: 80,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    search: false,
    sorter: (a, b) =>
      new Date(a.createTime!).getTime() - new Date(b.createTime!).getTime(),
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'time',
    valueType: 'dateRange',
    hideInTable: true,
    fieldProps: { ranges: dateRanges },
  },
  {
    title: '操作',
    fixed: 'right',
    search: false,
    width: 160,
    render: (_, record, __, action) => (
      <Operation record={record} action={action} />
    ),
  },
]
