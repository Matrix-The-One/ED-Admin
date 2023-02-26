declare namespace SYSTEM_USERSERVICE_API {
  type LoginParams = Partial<{
    userName: string
    password: string
    autoLogin: boolean
    type: string
  }>

  type LoginResult = Partial<
    SYSTEM_API.BaseResult & {
      data: Date
      token: string
    }
  >

  type UserInfoResult = Partial<
    SYSTEM_API.BaseResult & {
      data: Partial<{
        name: string
        password: string
        userId: number
        access: string
        roleId: number
        nickName: string
        avatar: string
        account: string
        phone: string
        eMail: string
        signature: string
        address: string
        state: number
        id: number
        createTime: Date
        createUser: number
        modifyTime: Date
        modifyUser: number
        remark: string
        isDel: boolean
      }>
    }
  >

  type UpdateUserInfoParams = Partial<
    SYSTEM_API.BaseResult & {
      id: number
      roleId: number
      nickName: string
      avatar: string
      account: string
      phone: string
      oldPassword: string
      password: string
      eMail: string
      signature: string
      address: string
    }
  >
}
