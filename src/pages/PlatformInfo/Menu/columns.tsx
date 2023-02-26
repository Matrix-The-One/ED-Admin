import { dateRanges } from '@/constants/date'
import * as Icons from '@ant-design/icons'
import type { ProColumns } from '@ant-design/pro-components'
import { useRequest } from '@umijs/max'
import { Button, message, Popconfirm } from 'antd'
import React from 'react'
import EditMenu from './components/EditMenu'
import type { IList, IOperationProps } from './interface'

const DeleteMenuRequest = (p: any) =>
  new Promise<any>((r) => {
    setTimeout(() => r(p), 500)
  })

const HiddenMenuRequest = (p: any) =>
  new Promise<any>((r) => {
    setTimeout(() => r(p), 500)
  })

const Operation: React.FC<IOperationProps> = ({ record, action }) => {
  const { run: deleteMenuRun, loading: deleteMenuLoading } = useRequest(
    () => DeleteMenuRequest({ id: record.id }),
    {
      manual: true,
      onSuccess: () => {
        message.success('删除成功')
        action?.reload()
      },
    },
  )

  const { run: hiddenMenuRun, loading: hiddenMenuLoading } = useRequest(
    (isHidden: boolean) => HiddenMenuRequest({ id: record.id, isHidden }),
    {
      manual: true,
      onSuccess: () => {
        message.success(record?.isHidden ? '显示成功' : '隐藏成功')
        action?.reload()
      },
    },
  )

  return (
    <>
      <EditMenu
        record={record}
        refresh={action?.reload}
        trigger={
          <Button type='link' size='small'>
            编辑
          </Button>
        }
      />
      <EditMenu
        addSubmenu
        record={record}
        refresh={action?.reload}
        trigger={
          <Button type='link' size='small'>
            新增子菜单
          </Button>
        }
      />
      {
        {
          true: (
            <Button
              type='link'
              size='small'
              loading={hiddenMenuLoading}
              onClick={() => hiddenMenuRun(false)}
            >
              显示
            </Button>
          ),
          false: (
            <Button
              type='link'
              size='small'
              loading={hiddenMenuLoading}
              onClick={() => hiddenMenuRun(true)}
            >
              隐藏
            </Button>
          ),
        }[`${record.isHidden!}`]
      }
      <Popconfirm
        title='确认要删除此菜单吗？'
        onConfirm={() => deleteMenuRun()}
        okText='确认'
        cancelText='取消'
      >
        <Button danger type='link' size='small' loading={deleteMenuLoading}>
          删除
        </Button>
      </Popconfirm>
    </>
  )
}

export const generateColumns = (): ProColumns<IList>[] => [
  {
    title: '菜单名称',
    dataIndex: 'title',
    fixed: 'left',
    width: 120,
  },
  {
    title: '图标',
    dataIndex: 'icon',
    search: false,
    width: 100,
    render: (_, { icon }) =>
      icon
        ? (Icons as unknown as Record<string, React.FunctionComponent>)[icon]
          ? React.createElement(
              (Icons as unknown as Record<string, React.FunctionComponent>)[
                icon
              ],
            )
          : icon
        : '-',
  },
  {
    title: '路由',
    dataIndex: 'route',
    copyable: true,
    search: false,
    width: 150,
  },
  {
    title: '组件',
    dataIndex: 'component',
    search: false,
    width: 150,
  },
  {
    title: '是否隐藏',
    dataIndex: 'isHidden',
    search: false,
    valueEnum: {
      true: { text: '是', status: 'Warning' },
      false: { text: '否', status: 'Success' },
    },
    width: 100,
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
    width: 150,
    render: (_, record, __, action) => (
      <Operation record={record} action={action} />
    ),
  },
]
