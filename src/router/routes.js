import Error404 from '../pages/Error404'
import Index from '../pages/Index'
import MyLayout from '../layouts/MyLayout'

const routes = [
  {
    path: '/',
    component: MyLayout,
    children: [
      { path: '', component: Index }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: Error404
  })
}

export default routes
