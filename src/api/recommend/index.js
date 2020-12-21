import { get } from '@/request'

const getCommendList = async () => {
  const result = await get('/top/playlist/highquality?limit=6')
  // console.log(result)
  return result
}

export { getCommendList }
