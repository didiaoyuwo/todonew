import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Todos from './data/todoList'

export default {
  start () {
    let mock = new MockAdapter(axios)

    mock.onGet('/users').reply(200,{
        Todos
    })
  }
}