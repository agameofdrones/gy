export default [
  {
      path: '/',
      component: require('./app.vue')
  },
  {
    path: '/login/',
    component: require('./pages/login.vue')
  },
  {
    path: '/register/',
    component: require('./pages/register.vue')
  },
  {
    path: '/about/',
    component: require('./pages/about.vue')
  },
  {
    path: '/quest/',
    component: require('./pages/quest.vue')
  },
  {
    path: '/reservations/',
    component: require('./pages/reservations.vue')
  },
  {
    path: '/more/',
    component: require('./pages/more.vue')
  },
  {
    path: '/bottom-toolbar/',
    component: require('./pages/bottom-toolbar.vue')
  },
  {
    path: '/search/',
    component: require('./pages/search.vue')
  },
  {
    path: '/center-profile/:id',
    component: require('./pages/center-profile.vue')
  },
  {
    path: '/read/',
    component: require('./pages/read.vue')
  },
  {
    path: '/ask/',
    component: require('./pages/ask.vue')
  },
  {
    path: '/ask-question/',
    component: require('./pages/ask-question.vue')
  },
  {
    path: '/answers/:id',
    component: require('./pages/answers.vue')
  },
  {
    path: '/map/:id',
    component: require('./pages/map.vue')
  },
  {
    path: '/search-map/',
    component: require('./pages/search-map.vue')
  },
  {
    path: '/article/:id',
    component: require('./pages/article.vue')
  },
  
]