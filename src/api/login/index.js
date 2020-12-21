import { post } from '@/request'

const userLogin = (data) => {
  return post('/login/cellphone', data)
}

export { userLogin }
