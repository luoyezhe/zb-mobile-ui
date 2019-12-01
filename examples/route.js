import NavConfig from './nav.config.json'
// import Vue from 'vue'

const registerRoute = (config) => {
  let route = []
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        name: page.name,
        path: page.path,
        component: require(`./pages${page.path}`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    )
  )

  return { route, navs: config }
};

const route = registerRoute(NavConfig)

route.route.push({
  path: '/demo',
  component: require('./Demo.vue')
});

// let indexScrollTop = 0;
// route.beforeEach((route, redirect, next) => {
//   if (route.path !== '/') {
//     indexScrollTop = document.body.scrollTop
//   }
//   document.title = route.meta.title || document.title
//   next()
// })
//
// route.afterEach(route => {
//   if (route.path !== '/') {
//     document.body.scrollTop = 0
//   } else {
//     Vue.nextTick(() => {
//       document.body.scrollTop = indexScrollTop
//     })
//   }
// })

export const navs = route.navs
export default route.route
