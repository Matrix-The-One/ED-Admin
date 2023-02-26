import { UserStoreEnum } from '@/constants/store'
import localforage from '@/utils/localforage'
import { useModel } from '@umijs/max'
import { notification } from 'antd'
import { stringify } from 'querystring'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const loginPath = '/login'

const greetings = (hours: number) => {
  switch (true) {
    case hours < 6:
      return '凌晨'
    case hours < 9:
      return '早上'
    case hours < 12:
      return '上午'
    case hours < 14:
      return '中午'
    case hours < 17:
      return '下午'
    case hours < 19:
      return '傍晚'
    default:
      return '晚上'
  }
}

const useUser = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { pathname, search } = useLocation()
  const { initialState, setInitialState } = useModel('@@initialState')

  const fetchUserInfo = async (popupGreeting = true) => {
    const userInfo = await initialState?.fetchUserInfo?.()

    if (userInfo) {
      await setInitialState(s => ({ ...s, currentUser: userInfo }))

      if (popupGreeting) {
        notification.success({
          message: '欢迎回来！',
          description: `${greetings(new Date().getHours())}好，${
            userInfo.name
          }！`,
        })
      }
    }
  }

  const login = async (params: SYSTEM_USERSERVICE_API.LoginParams) => {
    // const { token } = await Login(params)
    const { token } = await new Promise<any>(r => {
      setTimeout(() => r({ token: 'token', params }), 500)
    })
    localforage.setItem(UserStoreEnum.ACCESS_TOKEN, token, 1000 * 60 * 60 * 12)

    await fetchUserInfo()
    navigate(searchParams.get('redirect') || '/')
  }

  const logout = () => {
    localforage.removeItem(UserStoreEnum.ACCESS_TOKEN)
    setInitialState(s => ({ ...s, currentUser: void 0 }))

    if (pathname !== loginPath) {
      navigate(
        `${loginPath}?${stringify({
          redirect: `${pathname}${search}`,
        })}`,
        { replace: true },
      )
    }
  }

  return { login, logout, fetchUserInfo }
}

export default useUser
