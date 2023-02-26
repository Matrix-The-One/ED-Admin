import { Divider, Space } from 'antd'
import SwitchTheme from './SwitchTheme'
import SystemMenu from './SystemMenu'
import UserInfo from './UserInfo'

const RightContent = () => {
  return (
    <Space align='center' split={<Divider type='vertical' />}>
      <SystemMenu />
      <UserInfo />
      <SwitchTheme />
    </Space>
  )
}

export default RightContent
