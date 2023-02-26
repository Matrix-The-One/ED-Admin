import { Avatar, Dropdown, Menu } from 'antd'
import { LockOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import EditPassword from './EditPassword'
import Profile from './Profile'
import { useModel } from '@umijs/max'
import useUser from '@/hooks/useUser'

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
        <Avatar
          size='small'
          src={avatar || void 0}
          alt={nickName}
          style={{ backgroundColor: avatar ? void 0 : '#f56a00' }}
        >
          {avatar || nickName?.slice(-2)}
        </Avatar>
        <span>{nickName}</span>
      </div>
    </Dropdown>
  )
}

export default UserInfo
