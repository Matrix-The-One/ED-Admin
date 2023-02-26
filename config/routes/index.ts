import developmentLab from './developmentLab'
import educationTraining from './educationTraining'
import platformInfo from './platformInfo'
import research from './research'
import trainingRoom from './trainingRoom'
import undergraduate from './undergraduate'

export default [
  {
    name: '登录',
    path: '/login',
    layout: false,
    component: 'Login',
  },
  {
    name: '首页',
    path: '/welcome',
    component: 'Welcome',
  },
  {
    name: '平台信息系统',
    path: '/platform-info',
    routes: platformInfo,
  },
  {
    name: '本科生管理',
    path: '/undergraduate',
    routes: undergraduate,
  },
  {
    name: '教培管理',
    path: '/education-training',
    routes: educationTraining,
  },
  {
    name: '实训室管理',
    path: '/training-room',
    routes: trainingRoom,
  },
  {
    name: '开放实验室管理',
    path: '/development-lab',
    routes: developmentLab,
  },
  {
    name: '科研管理',
    path: '/research',
    routes: research,
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: '404',
  },
]
