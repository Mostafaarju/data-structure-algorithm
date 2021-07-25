class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }
  add(value) {
    const newNode = new Node(value);
    // this.head.next = newNode;
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }
}

const head = new Node(1500);
const mBondon = new LinkedList(head);
mBondon.add(50);
mBondon.add(40);
mBondon.add(30);
console.log(JSON.stringify(mBondon));
