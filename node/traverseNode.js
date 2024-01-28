/**
 * Traverse meaning: Visiting every node thru link that has each Node, until reach null (last Node).
 *
 * Using the node class, we are going to traverse.
 * 1. Create 3 nodes that are linked. (excluding the last one)
 * 2. Use while loop to traverse.
 */

import NodeAPI from "./NodeAPI.js";

const earth = new NodeAPI("This is the earth");
const mars = new NodeAPI("Welcome to Mars");
const jupiter = new NodeAPI("Jupiter biggest planet");

earth.setNextNode(mars);
mars.setNextNode(jupiter);

let currentPlanet = earth;
while (currentPlanet !== null) {
  console.log("Where we are now?!");
  console.log(currentPlanet.data);
  currentPlanet = currentPlanet.getNextNode();
}
