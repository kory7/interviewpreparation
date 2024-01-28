/**
 * What about Node?
 * Node is a data type which contains a value and link to another Node.
 * Is used for list, stacks, queues, trees and more.
 * Ex.
 *  {data: 5, link: node_b}
 *
 * The node contains number 5 and also a link to the node_b.
 * Data: can contain any type of value, even null.
 * Link: can be multiple links, one link or null. When the link is null, means that this node is the last one.
 *
 * {data: null, link: null}         is a valid Node.
 * {data: 5, link: node_b, node_c}  is a valid Node.
 */

//Default Node creation.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node(5);
console.log(firstNode);
