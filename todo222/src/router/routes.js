import Layout from '@/components/layout.vue'
import Todo from '@/components/todo.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/todo/:id',
        name: 'todo',
        component: Todo
      }
    ]
  }
]
export default routes
