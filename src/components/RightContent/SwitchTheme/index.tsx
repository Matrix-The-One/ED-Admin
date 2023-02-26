import { ReactComponent as Moon } from '@/assets/images/moon.svg'
import { ReactComponent as Sun } from '@/assets/images/sun.svg'
import { SystemStoreEnum } from '@/constants/store'
import localforage from '@/utils/localforage'
import { useModel } from '@umijs/max'
import classnames from 'classnames'
import { produce } from 'immer'
import styles from './index.less'

const SwitchTheme = () => {
  const { initialState, setInitialState } = useModel('@@initialState')
  const navTheme = initialState?.settings?.navTheme

  return (
    <button
      type='button'
      onClick={() => {
        const switchTheme = navTheme === 'light' ? 'realDark' : 'light'
        setInitialState(
          produce(initialState, draft => {
            draft!.settings!.navTheme = switchTheme
          }),
        )
        localforage.setItem(SystemStoreEnum.NAV_THEME, switchTheme)
      }}
      className={classnames(styles.switch, {
        [styles.dark]: navTheme === 'realDark',
      })}
    >
      <span className={styles.check}>
        <span className={styles.icon}>
          <Sun style={{ opacity: navTheme === 'light' ? 1 : 0 }} />
          <Moon style={{ opacity: navTheme === 'realDark' ? 1 : 0 }} />
        </span>
      </span>
    </button>
  )
}

export default SwitchTheme
