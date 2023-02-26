export default [
  {
    path: '',
    redirect: 'scheduling-template',
  },
  {
    name: '排课模板',
    path: 'scheduling-template',
    icon: 'unorderedList',
    component: 'EmptyPage',
  },
  {
    name: '排课计划',
    path: 'scheduling-plan',
    icon: 'unorderedList',
    component: 'EmptyPage',
  },
  {
    name: '考务管理',
    path: 'examination',
    icon: 'unorderedList',
    routes: [
      {
        path: '',
        redirect: 'exam-plan',
      },
      {
        name: '考试计划',
        path: 'exam-plan',
        icon: 'unorderedList',
        component: 'EmptyPage',
      },
      {
        name: '试卷批阅',
        path: 'test-paper-marking',
        icon: 'unorderedList',
        component: 'EmptyPage',
      },
    ],
  },
  {
    name: '教案管理',
    path: 'lesson-plan',
    icon: 'unorderedList',
    component: 'EmptyPage',
  },
]
