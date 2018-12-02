import { getTodoList } from '@/api/api.js'

export const getTodo = ({commit}) => {
  return new Promise((resolve, reject) => {
    getTodoList().then(res => {
      // console.log(res.data.todos)
      commit('EDITTODE', res.data.todos)
      resolve()
    })
  })
}
