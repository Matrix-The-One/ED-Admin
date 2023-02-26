export default [
  {
    path: '',
    redirect: 'rotation',
  },
  {
    name: '轮转管理',
    path: 'rotation',
    icon: 'unorderedList',
    routes: [
      {
        path: '',
        redirect: 'base-section',
      },
      {
        name: '基地科室维护',
        path: 'base-section',
        component: 'EmptyPage',
      },
      {
        name: '轮转模板管理',
        path: 'rotation-template',
        component: 'EmptyPage',
      },
      {
        name: '轮转计划',
        path: 'rotation-plan',
        component: 'EmptyPage',
      },
      {
        name: '指定代教老师',
        path: 'substitute-teacher',
        component: 'EmptyPage',
      },
      {
        name: '学员轮转计划',
        path: 'student-rotation-plan',
        component: 'EmptyPage',
      },
    ],
  },
  {
    name: '测评管理',
    path: 'assessment',
    icon: 'unorderedList',
    routes: [
      {
        path: '',
        redirect: 'radar-model',
      },
      {
        name: '雷达模型设置',
        path: 'radar-model',
        component: 'EmptyPage',
      },
      {
        name: '测评模块管理',
        path: 'module',
        component: 'EmptyPage',
      },
    ],
  },
  {
    name: '教学活动',
    path: 'teaching-activities',
    icon: 'unorderedList',
    routes: [
      {
        path: '',
        redirect: 'category',
      },
      {
        name: '教学活动类别管理',
        path: 'category',
        component: 'EmptyPage',
      },
      {
        name: '教学活动管理',
        path: 'list',
        component: 'EmptyPage',
      },
    ],
  },
  {
    name: '考勤管理',
    path: 'attendance',
    icon: 'unorderedList',
    routes: [
      {
        path: '',
        redirect: 'shifts',
      },
      {
        name: '考勤班次管理',
        path: 'shifts',
        component: 'EmptyPage',
      },
    ],
  },
  {
    name: '排班管理',
    path: 'scheduling',
    icon: 'unorderedList',
    component: 'EmptyPage',
  },
  {
    name: '进修生管理',
    path: 'advanced-students',
    icon: 'unorderedList',
    routes: [
      {
        path: '',
        redirect: 'registration',
      },
      {
        name: '报名管理',
        path: 'registration',
        component: 'EmptyPage',
      },
    ],
  },
  {
    name: '住院区管理',
    path: 'inpatient-area',
    icon: 'unorderedList',
    routes: [
      {
        path: '',
        redirect: 'course',
      },
      {
        name: '课程管理',
        path: 'course',
        component: 'EmptyPage',
      },
    ],
  },
]
