import useUser from '@/hooks/useUser'
import { UpdateUserInfo } from '@/services/system/UserService'
import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components'
import { useModel } from '@umijs/max'
import { message } from 'antd'

interface FormData {
  oldPassword?: string
  newPassword?: string
  confirmNewPassword?: string
}

interface IProps {
  trigger?: JSX.Element
}

const EditPassword: React.FC<IProps> = ({ trigger }) => {
  const { logout } = useUser()
  const { initialState } = useModel('@@initialState')
  const [proForm] = ProForm.useForm<FormData>()
  const newPassword = ProForm.useWatch('newPassword', proForm)

  return (
    <ModalForm<FormData>
      form={proForm}
      title='修改密码'
      layout='horizontal'
      labelCol={{ span: 4 }}
      trigger={trigger}
      modalProps={{ destroyOnClose: true }}
      onFinish={async values => {
        await UpdateUserInfo({
          ...initialState?.currentUser,
          oldPassword: values.oldPassword,
          password: values.newPassword,
        })
        logout()
        message.success('修改成功，请重新登录！')
        return true
      }}
      width={600}
    >
      <ProFormText.Password
        name='oldPassword'
        label='当前密码'
        rules={[
          { required: true, whitespace: true, message: '当前密码不能为空' },
        ]}
      />
      <ProFormText.Password
        name='newPassword'
        label='新密码'
        rules={[
          { required: true, message: '新密码不能为空' },
          {
            pattern:
              /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,16}$/,
            message: '密码长度 6-16 位，由数字和字母组合',
          },
        ]}
      />
      <ProFormText.Password
        name='confirmNewPassword'
        label='确认新密码'
        dependencies={['newPassword']}
        rules={[
          { required: true, message: '请重复输入新密码' },
          {
            validator: (_, value, callback) => {
              if (value && value !== newPassword) {
                return callback('两次输入的新密码不一致')
              }

              callback()
            },
          },
        ]}
      />
    </ModalForm>
  )
}

export default EditPassword
