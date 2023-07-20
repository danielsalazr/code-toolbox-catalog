/*
   10
 4   20
2 8 17 170

*/

class Node {
    constructor(value){
        this.left =  null;
        this.rigth =null;
        this.value = value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root =  newNode;
        } else{
            let currentNode = this.root;
            while (true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this;
                    }
                    currentNode = currentNode.left;            
                } else{
                    if(!currentNode.rigth){
                        currentNode.rigth = newNode;
                        return this;
                    }
                    currentNode = currentNode.rigth;
                }
            }
        }
    }

    search(value){
        let currentNode = this.root;
        
        while(currentNode && currentNode.value != value){
            if (value<currentNode.value){
                currentNode=currentNode.left;
            } else if(value > currentNode.value){
                currentNode=currentNode.rigth;
            } 
            if(!currentNode){
                return false;
            } else if(currentNode.value == value){
                return currentNode;
                //return true
            }
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);

console.log(tree);
console.log(tree.search(4));