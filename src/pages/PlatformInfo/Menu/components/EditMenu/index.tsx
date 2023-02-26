import * as Icons from '@ant-design/icons'
import type { ActionType } from '@ant-design/pro-components'
import {
  ModalForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components'
import { message } from 'antd'
import React from 'react'
import type { IList } from '../../interface'

const EditMenuRequest = (p: any) =>
  new Promise<any>((r) => {
    setTimeout(() => r(p), 500)
  })

interface FormData {
  title?: string
  icon?: string
  route?: string
  component?: string
}

interface IProps {
  trigger?: JSX.Element
  record?: IList
  refresh?: ActionType['reload']
  addSubmenu?: boolean
}

const EditMenu: React.FC<IProps> = ({
  trigger,
  record,
  refresh,
  addSubmenu,
}) => {
  const isEdit = !!record?.id && !addSubmenu
  const title = isEdit
    ? `编辑菜单：${record.title}`
    : addSubmenu
    ? `新增子菜单：${record!.title}`
    : '新增菜单'

  return (
    <ModalForm<FormData>
      title={title}
      trigger={trigger}
      layout='horizontal'
      labelCol={{ span: 4 }}
      modalProps={{ destroyOnClose: true }}
      initialValues={isEdit ? record : { onlyDev: false }}
      onFinish={async (values) => {
        await EditMenuRequest(values)
        refresh?.()
        message.success(isEdit ? '编辑成功' : '新增成功')
        return true
      }}
      width={600}
    >
      <ProFormText
        label='名称'
        name='title'
        rules={[{ required: true, whitespace: true }]}
      />
      <ProFormText
        label='路由'
        name='route'
        rules={[{ required: true, whitespace: true }]}
      />
      <ProFormSelect
        label='图标'
        name='icon'
        fieldProps={{ showSearch: true, optionFilterProp: 'value' }}
        options={Object.entries(Icons)
          .filter((i) => i[0] !== 'default' && typeof i[1] === 'object')
          .map(([name, component]) => ({
            label: React.createElement(component as React.FunctionComponent),
            value: name,
          }))}
      />
      <ProFormText label='组件' name='component' />
    </ModalForm>
  )
}

export default EditMenu
