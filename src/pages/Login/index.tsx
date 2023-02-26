import LoginBanner from '@/assets/images/login-banner.jpg'
import logo from '@/assets/images/logo.png'
import useUser from '@/hooks/useUser'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import { Image } from 'antd'
import styles from './index.less'

interface FormData {
  userName?: string
  password?: string
}

const Login = () => {
  const { login } = useUser()

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image src={LoginBanner} preview={false} height={360} />
        <LoginForm<FormData>
          logo={logo}
          title={<div className={styles.title}>教学与科研管理平台</div>}
          onFinish={login}
        >
          <div style={{ height: 30 }} />
          <ProFormText
            name='userName'
            rules={[{ required: true, message: '请输入账号' }]}
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined style={{ color: '#1890ff' }} />,
            }}
            placeholder='请输入账号'
          />
          <ProFormText.Password
            name='password'
            rules={[{ required: true, message: '请输入密码' }]}
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined style={{ color: '#1890ff' }} />,
            }}
            placeholder='请输入密码'
          />
        </LoginForm>
      </div>
    </div>
  )
}

export default Login
