import RightContent from '@/components/RightContent'
import type { Settings as LayoutSettings } from '@ant-design/pro-components'
import { SettingDrawer } from '@ant-design/pro-components'
import type { RunTimeLayoutConfig } from '@umijs/max'
import { history } from '@umijs/max'
import defaultSettings from '../config/defaultSettings'
import { SystemStoreEnum } from './constants/store'
import UnAccessible from './pages/403'
import { errorConfig } from './requestErrorConfig'
import localforage from './utils/localforage'
// import { UserInfo } from '@/services/system/UserService'

const loginPath = '/login'

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>
  currentUser?: any
  loading?: boolean
  fetchUserInfo?: () => Promise<any>
}> {
  const navTheme = await localforage.getItem<'light' | 'realDark' | undefined>(
    SystemStoreEnum.NAV_THEME,
  )

  const fetchUserInfo = async () => {
    // try {
    //   const { data } = await UserInfo({
    //     skipErrorHandler: true,
    //   })
    //   return data
    // } catch (error) {
    //   history.push(loginPath)
    // }
    // return undefined
    await new Promise((r) => {
      setTimeout(r, 1000)
    })
    return { name: '罗辑', nickName: '罗辑', account: '17777777777' }
  }

  const settings = {
    ...(defaultSettings as Partial<LayoutSettings>),
    navTheme: navTheme || 'light',
  }

  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo()
    return {
      fetchUserInfo,
      currentUser,
      settings,
    }
  }

  return {
    fetchUserInfo,
    settings,
  }
}

export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  return {
    rightContentRender: () => <RightContent />,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    onPageChange: () => {
      // if (!initialState?.currentUser && history.location.pathname !== loginPath) {
      //   history.push(loginPath)
      // }
    },
    unAccessible: <UnAccessible />,
    childrenRender: (children) => {
      return (
        <>
          {children}
          <div style={{ display: 'none' }}>
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }))
              }}
            />
          </div>
        </>
      )
    },
    ...initialState?.settings,
  }
}

export const request = {
  baseURL: APP_BASE_URL,
  timeout: 30000,
  withCredentials: true,
  ...errorConfig,
}
