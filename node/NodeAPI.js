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
 *
 * Orphan Node: There isn't any Node pointing(link) to orphan Node.
 */

//Default Node creation.
export default class NodeAPI {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  //Setter for nextNode
  setNextNode(next) {
    //Only accept Node instance or null in case that is the last node.
    if (next instanceof NodeAPI || next === null) {
      this.next = next;
    } else {
      throw new Error("Not instance of Node or null.");
    }
  }

  getNextNode() {
    return this.next;
  }
}

const firstNode = new NodeAPI(5);
console.log(firstNode);
