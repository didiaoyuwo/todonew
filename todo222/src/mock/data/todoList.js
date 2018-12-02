import Mock from 'mockjs'

let Todos = []
const Count = [1, 2, 3, 4, 5]
for (let i = 0; i < Count.length; i++) {
  Todos.push(Mock.mock({
    id: Mock.Random.guid(), // 随机id
    title: Mock.Random.first(), // 随机标题
    isDelete: false, // 是否删除
    locked: Mock.Random.boolean(), // 随机锁定
    record: Count.map(() => { // 代办单项列表的数据
      return {
        text: Mock.Random.cparagraph(2), // 随机内容
        isDelete: false, // 是否删除
        checked: Mock.Random.boolean() // 是否完成
      }
    })
  }))
}

export { Todos }
