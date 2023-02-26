import type { AlertProps, SpinProps } from 'antd'
import { Alert, Button, Spin } from 'antd'

interface ErrorAndLoadingProps {
  error?: Error | string
  loading?: boolean
  /**
   * @name 是否使用Spin组件包裹
   * @default true
   */
  isWrap?: boolean
  onRetry?: (...params: any) => any
  spinProps?: SpinProps
  alertProps?: AlertProps
  children?: React.ReactNode
}

const ErrorAndLoading: React.FC<ErrorAndLoadingProps> = ({
  error,
  loading = false,
  isWrap = true,
  onRetry,
  children,
  spinProps,
  alertProps,
}) => {
  if (!isWrap && !error && !loading) return <>{children}</>

  return (
    <Spin spinning={loading} {...spinProps}>
      {isWrap && !error && children}
      {error && (
        <Alert
          showIcon
          type='error'
          message='Request Error'
          description={
            (typeof error === 'string' ? error : error?.message) ||
            '暂无错误信息'
          }
          action={
            <Button danger loading={loading} onClick={onRetry}>
              重试
            </Button>
          }
          {...alertProps}
        />
      )}
    </Spin>
  )
}

export default ErrorAndLoading
