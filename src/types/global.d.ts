export type PageResult<T> = {
  items: T[]
  counts: number
  page: number
  pages: number
  pageSize: number
}
export type PageParams = {
  page?: number
  pageSize?: number
}
