import { get } from '@/request'

const getSongUrl = async (id) => {
  const result = await get(`/song/url?id=${id}`)
  // console.log(result.data.data[0].url)
  return result
}

///song/detail?ids=1408471216
const getImgUrl = async (id) => {
  const result = await get(`/song/detail?ids=${id}`)
  // console.log(result.data.songs[0].al.picUrl)
  return result
}

export { getSongUrl, getImgUrl }
