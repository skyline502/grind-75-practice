 */
var isValidBST = function(root) {
    let queue = [root]
    
    while (queue.length) {
      let current = queue.shift()
      
      if (current.left) {
        if (current.left.val < current.val) {
  queue.push(current.left)
} else {
  return false
}
     if (current.right){
         console.log(current.val, current.right.val)
if (current.right.val > current.val) {
queue.push(current.right)
} else {
return false
}
}  
      }
    }
    return true
};
