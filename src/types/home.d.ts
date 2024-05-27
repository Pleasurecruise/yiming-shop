// 轮播图
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}
// 商品列表
export type CategoryItem = {
  icon: string
  id: string
  name: string
}
// 热销商品
export type HotItem = {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: string
}
