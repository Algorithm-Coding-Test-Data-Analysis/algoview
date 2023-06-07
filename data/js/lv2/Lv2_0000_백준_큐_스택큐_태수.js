class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  
  enqueue(value) {
    const newValue = new Node(value)
    if (!this.head) {
      this.head = newValue
      this.tail = newValue
    } else {
      this.tail.next = newValue
      this.tail = newValue
    }
    this.length++
  }

  dequeue() {
    if (!this.head) return null
    const temp = this.head
    if (this.head === this.tail) {
      this.tail = null
    }
    this.head = this.head.next
    this.length--
    return temp
  }

}

function solution(input) {
  const queue = new Queue()
  let result = ""
  for (let orderStr of input) {
    const order = orderStr.split(" ")
    const orderList = {
      push: () => {
        queue.enqueue(order[1])
      },
      pop: () => {
        const node = queue.dequeue()
        if (!node) result += `-1\n`
        else result += `${node.value}\n`
      },
      size: () => {
        result += `${queue.length}\n`
      },
      empty: () => {
        if (!queue.length) result += `1\n`
        else result += `0\n`
      },
      front: () => {
        if (queue.length) result += `${queue.head.value}\n`
        else result += `-1\n`
      },
      back: () => {
        if (queue.length) result += `${queue.tail.value}\n`
        else result += `-1\n`
      }
    }
    orderList[order[0]]()
  }
  return result
}
