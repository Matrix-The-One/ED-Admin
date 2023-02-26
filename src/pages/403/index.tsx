import { Button } from 'antd'
import classnames from 'classnames'
import { useNavigate } from 'react-router-dom'
import styles from './index.less'

// https://codepen.io/ageevaagata/pen/PGbvpe
const UnAccessible = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.message}>抱歉，你无权访问该页面！</div>
        <Button
          type='primary'
          onClick={() => navigate('/')}
          className={styles.button}
        >
          返回首页
        </Button>
      </div>
      <div className={styles.right}>
        <div className={styles.neon}>403</div>
        <div className={styles['door-frame']}>
          <div className={styles.door}>
            <div className={styles.rectangle}></div>
            <div className={styles.handle}></div>
            <div className={styles.window}>
              <div className={styles.eye}></div>
              <div className={classnames(styles.eye, styles.eye2)}></div>
              <div className={styles.leaf}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnAccessible
