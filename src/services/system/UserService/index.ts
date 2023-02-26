import { request } from '@umijs/max'

export async function Login(
  body?: SYSTEM_USERSERVICE_API.LoginParams,
  options?: { [key: string]: any },
) {
  return request<SYSTEM_USERSERVICE_API.LoginResult>(
    '/system/UserService/Login',
    {
      method: 'POST',
      data: body,
      ...(options || {}),
    },
  )
}

export async function Logout(options?: { [key: string]: any }) {
  return request<RESPONSE_API.BaseResult>('/system/UserService/Logout', {
    method: 'POST',
    ...(options || {}),
  })
}

export async function UserInfo(options?: { [key: string]: any }) {
  return request<SYSTEM_USERSERVICE_API.UserInfoResult>(
    '/system/UserService/UserInfo',
    {
      method: 'GET',
      ...(options || {}),
    },
  )
}

export async function UpdateUserInfo(
  body?: SYSTEM_USERSERVICE_API.UpdateUserInfoParams,
  options?: { [key: string]: any },
) {
  return request<RESPONSE_API.BaseResult>(
    '/system/UserService/UpdateUserInfo',
    {
      method: 'POST',
      data: body,
      ...(options || {}),
    },
  )
}
