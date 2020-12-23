import { get } from '@/request'

const getCommendList = async () => {
  const result = await get('/top/playlist/highquality?limit=6')
  return result
}

const getDailyList = async () => {
  const result = await get('/recommend/songs')
  return result
}

export { getCommendList, getDailyList }
