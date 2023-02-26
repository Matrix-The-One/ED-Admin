import type { ActionType } from '@ant-design/pro-components'
import {
  ModalForm,
  ProFormRadio,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components'
import { message } from 'antd'
import type { IList } from '../../interface'

const EditRequest = (p: any) =>
  new Promise<any>((r) => {
    setTimeout(() => r(p), 500)
  })

interface FormData {
  name?: string
  description?: string
  enable?: boolean
}

interface IProps {
  trigger?: JSX.Element
  record?: IList
  refresh?: ActionType['reload']
}

const EditRole: React.FC<IProps> = ({ trigger, record, refresh }) => {
  const isEdit = !!record?.id
  const title = isEdit ? `编辑角色：${record.name}` : '新增角色'

  return (
    <ModalForm<FormData>
      title={title}
      trigger={trigger}
      layout='horizontal'
      labelCol={{ span: 4 }}
      modalProps={{ destroyOnClose: true }}
      initialValues={isEdit ? record : { enable: true }}
      onFinish={async (values) => {
        await EditRequest(values)

        message.success(isEdit ? '编辑成功' : '新增成功')
        refresh?.()
        return true
      }}
      width={600}
    >
      <ProFormText
        label='角色名称'
        name='name'
        rules={[
          { required: true, whitespace: true, message: '角色名不能为空' },
        ]}
        fieldProps={{ maxLength: 10 }}
      />
      <ProFormTextArea label='角色描述' name='description' />
      <ProFormRadio.Group
        label='是否启用'
        name='enable'
        options={[
          { label: '启用', value: true },
          { label: '禁用', value: false },
        ]}
      />
    </ModalForm>
  )
}

export default EditRole
