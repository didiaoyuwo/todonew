import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Todos, Items } from './data/todoList'

export default {
  start () {
    let mock = new MockAdapter(axios)
    mock.onGet('/').reply(200, Todos)
    mock.onGet('/todo/0').reply(200, Items)
    mock.onGet('/todo/1').reply(200, Items)
    mock.onGet('/todo/2').reply(200, Items)
    mock.onGet('/todo/3').reply(200, Items)
    mock.onGet('/todo/4').reply(200, Items)
  }
}
