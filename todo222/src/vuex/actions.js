import { getTodoList } from '@/api/api.js'

export const getTodo = ({commit}) => {
  return new Promise((resolve, reject) => {
    getTodoList().then(res => {
      commit('EDITTODE', res.data.todos)
      resolve()
    })
  })
}
