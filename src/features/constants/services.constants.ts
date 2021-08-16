const URL = {
  baseApiUrl: () => 'https://api-test.anotemusic.com/api/v1',
  user: {},
  artists: {
    search: (search: string) => `/artists/search/${search}`,
    create: `/artists`,
    getById: (id: string) => `/artists/${id}`,
    createReport: (id: string) => `/artists/${id}/report`,
  },
}

export default URL
