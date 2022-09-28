import { userAccessType } from '@/pages/App'

// todo 这是本地开发所用，线上环境请把这个替换为真实的数据
export default [
  {
    routers: [
      '/',
      '/home',
      '/dashboard/analysis',
      '/dashboard/overview',
      '/user/user-manager',
      '/user/role-manager',
      '/user/permission-manager',
      '/efficiency/project-manager',
      '/efficiency/team-manager',
      '/monitor/realtime-monitor',
      '/monitor/history-monitor',
      '/monitor/monitor-config',
      '/monitor/resource-manager',
      '/monitor/metadata',
      '/personal/personal-setting',
      '/personal/todo-list',
      '/personal/my-collection',
      '/personal/my-subscription',
      '/personal/my-device',
      '/version',
    ],
    detail: {},
  },
] as userAccessType[]
