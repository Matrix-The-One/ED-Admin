export default function access(
  initialState:
    | { currentUser?: SYSTEM_USERSERVICE_API.UserInfoResult }
    | undefined,
) {
  const { currentUser } = initialState ?? {}
  return {
    canAdmin: currentUser && false,
  }
}
