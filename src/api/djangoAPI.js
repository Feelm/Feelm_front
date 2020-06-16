export default {
  URL: 'http://localhost:8000',
  ROUTES: {
    signup: '/rest-auth/signup/',
    
    login: '/rest-auth/login/',

    logout: '/rest-auth/logout/',

    authInfo: '/rest-auth/user/',

    getTrailer: '/movies/latest/',

    getMovies: '/movies/',

    postPoint: '/point/'
    
    // getReviewRecent: '/reviews/'

    // createArticle: '/articles/create/',

    // articleList: '/articles/',
  }
}