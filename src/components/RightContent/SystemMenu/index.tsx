import { CaretDownOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SystemMenu = () => {
  const location = useLocation()
  const prefixUrl =
    '/' + location.pathname.replace(/^\//, '').replace(/\/(.*)/, '')
  const [selectedKeys, setSelectedKeys] = useState([prefixUrl])

  useEffect(() => {
    setSelectedKeys([prefixUrl])
  }, [location.pathname])

  console.log({ location, prefixUrl })

  const menus = [
    {
      name: '平台信息系统',
      url: '/platform-info',
    },
    {
      name: '本科生管理',
      url: '/undergraduate',
    },
    {
      name: '教培管理',
      url: '/education-training',
    },
    {
      name: '实训室管理',
      url: '/training-room',
    },
    {
      name: '开放实验室管理',
      url: '/development-lab',
    },
    {
      name: '科研管理',
      url: '/research',
    },
  ]

  return (
    <Dropdown
      menu={{
        items: menus.map(({ name, url }) => ({
          key: url,
          label: <Link to={url}>{name}</Link>,
        })),
        selectedKeys,
      }}
    >
      <a style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
        {menus.find((i) => i.url === prefixUrl)?.name || '教学与科研管理平台'}{' '}
        <CaretDownOutlined style={{ fontSize: 18, marginLeft: 4 }} />
      </a>
    </Dropdown>
  )
}

export default SystemMenu
