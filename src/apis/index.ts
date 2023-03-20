import apiService from '@src/services'

export default class CommonApi {
  static baseUrl = ''

  static async list(query?: any): Promise<any> {
    return apiService()
      .get(`${this.baseUrl}`, { query })
      .then((res) => res.data)
  }

  static async detail(id: number | string): Promise<any> {
    return apiService().get(`${this.baseUrl}/${id}`)
  }

  static async create(body: any): Promise<any> {
    return apiService().post(`${this.baseUrl}`, body)
  }

  static async edit(body: any): Promise<any> {
    return apiService().put(`${this.baseUrl}`, body)
  }
}
