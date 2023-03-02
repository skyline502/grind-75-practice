/*

Wrong approach does not account for nodes on subtrees being on the wrong side of root
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

*/

// correct approach

var isValidBST = function(root) {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(root, min, max) {
        if (!root) {
            return true; // We hit the end of the path
        }
        
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }
        
        // Continue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
                     //node, min, max.                     Node, min, max
    }
    
    return helper(root, null, null);
};
