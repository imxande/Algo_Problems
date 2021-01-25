/* 
    Depth-first Search

You are given a Node class that has a name and an array of Optional children nodes. When put together, node form an 
acyclic tree-like structure.

Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using 
the DepthFirstSearch approach, stores all the nodes' names in the input array, and returns it.

*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  // add a child method
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
