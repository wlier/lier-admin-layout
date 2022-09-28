import * as request from '@/utils/request'
import { type } from 'os'

const loginFC = (data: any) => {
  return request.POST('/v1/user/login', data)
}

const getRegister = (data: any) => {
  return request.POST('/auth/v1/user', data)
}
const Logout = (data?: any) => {
  return request.POST('/v1/user/logout', data)
}
const addUserData = (data: any) => {
  return request.POST('/auth/v1/user', data)
}

export interface getUserDataParams {
  size: number
  current: number
  keyword?: string
}
const getUserData = (data: getUserDataParams) => {
  return request.GET('/auth/v1/user', data)
}

const eidtUserData = (editUserData: any) => {
  return request.PUT(`/auth/v1/user/${editUserData.id}`, editUserData.data)
}
const deleteUserData = (id: number) => {
  return request.DELETE(`/auth/v1/user/${id}`)
}
const getUserDetails = (id: number) => {
  return request.GET(`/auth/v1/user/${id}`)
}

const getTeamData = (data: any) => {
  return request.GET('/auth/v1/team', data)
}
const addTeamData = (data: any) => {
  return request.POST('/auth/v1/team', data)
}
const eidtTeamData = (editUserData: any) => {
  return request.PUT(`/auth/v1/team/${editUserData.id}`, editUserData.data)
}
const deleteTeamData = (id: number) => {
  return request.DELETE(`/auth/v1/team/${id}`)
}
const getTeamDetails = (id: number) => {
  return request.GET(`/auth/v1/team/${id}`)
}

const getTaskData = (data: any) => {
  return request.GET('/auth/v1/task', data)
}
const addTaskData = (data: any) => {
  return request.POST('/auth/v1/task', data)
}
const eidtTaskData = (editUserData: any) => {
  return request.PUT(`/auth/v1/task/${editUserData.id}`, editUserData.data)
}
const deleteTaskData = (id: number) => {
  return request.DELETE(`/auth/v1/task/${id}`)
}
const getTaskDetails = (id: number) => {
  return request.GET(`/auth/v1/task/${id}`)
}
export {
  loginFC,
  getRegister,
  Logout,
  getUserData,
  addUserData,
  eidtUserData,
  deleteUserData,
  getUserDetails,
}
