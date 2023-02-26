export default [
  {
    path: '',
    redirect: 'lab-info',
  },
  {
    name: '实验室信息维护',
    path: 'lab-info',
    icon: 'unorderedList',
    component: 'EmptyPage',
  },
  {
    name: '实验材料管理',
    path: 'experimental-material',
    icon: 'unorderedList',
    component: 'EmptyPage',
    // access: 'canAdmin',
  },
]
