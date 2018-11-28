import Mock from 'mockjs'

let Todos = []
const Count = [1, 2, 3, 4, 5]
for (let i = 0; i < Count.length; i++) {
  Todos.push(Mock.mock({
    title: Mock.Random.ctitle(4),
    islock: Mock.Random.boolean(),
    count: Mock.Random.natural(0, 9)
  }))
}

let Items = []
const Number = [1, 2, 3, 4, 5]
for (let i = 0; i < Number.length; i++) {
  Items.push(Mock.mock({
    title: Mock.Random.ctitle(4),
    islock: Mock.Random.boolean(),
    count: Mock.Random.natural(0, 9),
    itmes: Number.map(() => {
      return {
        isChecked: Mock.Random.boolean(),
        content: Mock.Random.cparagraph(1, 2)
      }
    })
  }))
}

export { Todos, Items }
