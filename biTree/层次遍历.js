function TreeNode(val){
    this.val = val
    this.left = null
    this.right = null
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    let queue = []
    if (root){
        queue.push(root)
        queue.push('#')
    }
    while (queue.length!==0 && queue[0]!=='#'){
        var level = []
        while(queue[0]!=='#'){
            // console.log('level:',level)
            let node = queue.shift()
            level.push(node.val)
            if(node.left!==null){
                queue.push(node.left)
            }
            if(node.right !== null) {
                queue.push(node.right)
            }
        }
        queue.shift()
        queue.push('#')
        res.push(level)
    }
    return res
};
// root = [3,9,20,null,null,15,7]
let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log(levelOrder(root)) 
