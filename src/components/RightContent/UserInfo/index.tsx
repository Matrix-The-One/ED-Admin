import useUser from '@/hooks/useUser'
import { LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useModel } from '@umijs/max'
import { Avatar, Dropdown, Menu } from 'antd'
import EditPassword from './EditPassword'
import Profile from './Profile'

const UserInfo = () => {
  const { logout } = useUser()
  const { initialState } = useModel('@@initialState')
  const { avatar, nickName } = initialState?.currentUser || {}

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key='profile'>
            <Profile
              trigger={
                <div>
                  <UserOutlined /> 账户信息
                </div>
              }
            />
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key='password'>
            <EditPassword
              trigger={
                <div>
                  <LockOutlined /> 修改密码
                </div>
              }
            />
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key='logout' onClick={logout}>
            <LogoutOutlined /> 退出登录
          </Menu.Item>
        </Menu>
      }
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          gap: 8,
        }}
      >
        <Avatar size='small' src={avatar || void 0} alt={nickName}>
          {avatar || nickName?.slice(-2)}
        </Avatar>
        <span>{nickName}</span>
      </div>
    </Dropdown>
  )
}

export default UserInfo
