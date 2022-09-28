import * as request from '@/utils/request'

const projectModulePerfix = '/auth/v1/project'

// 团队详情
const getProjectList = (params: {
  current: number
  size: number
  keyword?: string
  team_id?: number
}) => {
  return request.GET(`${projectModulePerfix}s`, params)
}

export { getProjectList }
