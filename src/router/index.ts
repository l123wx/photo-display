import { createRouter, createWebHashHistory } from 'vue-router'

const pages = import.meta.glob('@/views/**/*.vue')

export default createRouter({
  routes: [
    ...Object.keys(pages).map((key) => {
      const pageName = key.match(/\/views\/(.+)\.vue$/)?.[1] || ''
      return {
        path: `/${pageName.toLowerCase()}`,
        component: pages[key],
      }
    }),
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/index.vue'),
    },
  ],
  history: createWebHashHistory(),
})
