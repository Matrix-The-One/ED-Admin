export default [
  {
    path: '',
    redirect: 'role',
  },
  {
    name: '角色管理',
    path: 'role',
    icon: 'team',
    component: 'PlatformInfo/Role',
  },
  {
    name: '用户管理',
    path: 'user',
    icon: 'user',
    component: 'EmptyPage',
  },
  {
    name: '科室列表',
    path: 'department',
    icon: 'database',
    component: 'EmptyPage',
  },
  {
    name: '学员管理',
    path: 'student',
    icon: 'picLeft',
    component: 'EmptyPage',
  },
  {
    name: '老师管理',
    path: 'teacher',
    icon: 'picRight',
    component: 'EmptyPage',
  },
  {
    name: '本科生信息',
    path: 'undergraduate',
    icon: 'picCenter',
    component: 'EmptyPage',
  },
  {
    name: '菜单管理',
    path: 'menu',
    icon: 'menuFold',
    component: 'PlatformInfo/Menu',
  },
]
