import Mock from 'mockjs';

let Todos = []
const Count = [1, 2, 3, 4, 5]
for (let i = 0; i < Count.length; i++) {
  Todos.push(Mock.mock({
      title: Mock.Random.ctitle(3, 5),
      islock: Mock.Random.boolean(),
      isdelete: true,
      data: Count.map(() => {
        return {
          content: Mock.Random.cparagraph(1, 3),
          isChecked: false
        }
      })
  }))
}

export default Todos

