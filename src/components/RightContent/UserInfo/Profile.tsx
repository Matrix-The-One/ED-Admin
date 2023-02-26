import { EditOutlined } from '@ant-design/icons'
import { ModalForm, ProForm } from '@ant-design/pro-components'
import { useModel } from '@umijs/max'
import { Avatar, message, Typography } from 'antd'
import { useState } from 'react'
import styles from './Profile.less'
// import ProFormUploadAvatar from '@/components/Upload/ProFormUploadAvatar'
import { UpdateUserInfo } from '@/services/system/UserService'

const { Paragraph } = Typography

interface FormData {
  avatar?: string
}

interface IProps {
  trigger?: JSX.Element
}

const Profile: React.FC<IProps> = ({ trigger }) => {
  const { initialState, refresh } = useModel('@@initialState')
  const [newName, setNewName] = useState(initialState?.currentUser?.nickName)
  const { account, avatar, nickName } = initialState?.currentUser || {}

  return (
    <ModalForm<FormData>
      title='账户信息'
      layout='horizontal'
      labelCol={{ span: 6 }}
      trigger={trigger}
      modalProps={{ destroyOnClose: true }}
      onOpenChange={() => setNewName(nickName)}
      initialValues={{ avatar }}
      onFinish={async values => {
        await UpdateUserInfo({
          ...initialState?.currentUser,
          ...values,
          nickName: newName,
          password: void 0,
        })
        refresh()
        message.success('修改成功')
        return true
      }}
      width={500}
    >
      {/* <ProFormUploadAvatar
        label='用户头像'
        name='avatar'
        fieldProps={{ listType: 'picture' }}
      >
        <EditAvatar nickName={nickName} />
      </ProFormUploadAvatar> */}
      <ProForm.Item label='用户头像'>
        <Avatar
          src={avatar || void 0}
          alt={nickName}
          style={{ backgroundColor: avatar ? void 0 : '#f56a00' }}
        >
          {avatar || nickName?.slice(-2)}
        </Avatar>
      </ProForm.Item>
      <ProForm.Item label='用户名称'>
        <Paragraph
          editable={{ onChange: setNewName }}
          style={{ marginBottom: 0 }}
        >
          {newName}
        </Paragraph>
      </ProForm.Item>
      <ProForm.Item label='登录账户'>
        <Paragraph copyable style={{ marginBottom: 0 }}>
          {account}
        </Paragraph>
      </ProForm.Item>
    </ModalForm>
  )
}

export default Profile

interface EditAvatarProps {
  imageUrl?: string
  nickName?: string
}

function EditAvatar({ imageUrl, nickName }: EditAvatarProps) {
  return (
    <div className={styles['avatar-container']}>
      <Avatar
        src={imageUrl}
        alt={nickName}
        style={{
          position: 'relative',
          backgroundColor: imageUrl ? void 0 : '#f56a00',
        }}
      >
        {imageUrl || nickName?.slice(-2)}
      </Avatar>
      <EditOutlined className={styles['avatar-edit-icon']} />
    </div>
  )
}
