import request from '@/request'

const getCommendList = async () => {
  const result = await request('/top/playlist/highquality?limit=6')
  // console.log(result)
  return result
}

export { getCommendList }
