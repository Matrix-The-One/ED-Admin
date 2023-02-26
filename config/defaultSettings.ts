import { ProLayoutProps } from '@ant-design/pro-components'

const Settings: ProLayoutProps & {
  pwa?: boolean
  logo?: string
} = {
  navTheme: 'light',
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  splitMenus: true,
  colorWeak: false,
  title: '教学与科研管理平台',
  pwa: false,
  logo: '/logo.svg',
  iconfontUrl: '',
  token: {},
}

export default Settings
