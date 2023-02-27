import { Divider, Space } from 'antd'
import SystemMenu from './SystemMenu'
import UserInfo from './UserInfo'

const RightContent = () => {
  return (
    <Space
      align='center'
      split={<Divider type='vertical' style={{ borderColor: '#ccc' }} />}
    >
      <SystemMenu />
      <UserInfo />
    </Space>
  )
}

export default RightContent
