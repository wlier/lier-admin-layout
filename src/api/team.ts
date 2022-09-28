import * as request from '@/utils/request'

const teamModulePerfix = '/auth/v1/team'

// 团队详情
const getTeamDetail = (teamId: number) => {
  return request.GET(`${teamModulePerfix}/${teamId}`)
}

export { getTeamDetail }
