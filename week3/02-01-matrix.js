/*

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.


Examples:

1.
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]


2.

Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.


*/

var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;

    // create m*n empty matrix
    const result = Array(m).fill().map(() => Array(n).fill())

  console.log(result, "result")
    
    //create a queue to hold all the index values that hold 0 
    // push 0 into the "result" matrix if value is 0 for that index

    const queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                result[i][j] = 0
                queue.push([i, j])
            }
        }
    }

  console.log(result, "result", "queue:", queue)

    while (queue.length) {
//find undefined values by using known 0 and incrementing based on distance
       const [x, y] = queue.shift();
    // if condition satisfy , add new index in queue and update its value in result matrix
        if (x - 1 >= 0 && result[x - 1][y] === undefined)
        {queue.push([x - 1, y]); result[x - 1][y] = result[x][y] + 1} //check up
       
        if (x + 1 < m && result[x + 1][y] === undefined) 
        {queue.push([x + 1, y]); result[x + 1][y] = result[x][y] + 1 }  // check down 
        
        if (y - 1 >= 0 && result[x][y - 1] === undefined) 
        { queue.push([x, y - 1]); result[x][y - 1] = result[x][y] + 1 } // check left
       
        if (y + 1 < n && result[x][y + 1] === undefined)
        { queue.push([x, y + 1]); result[x][y + 1] = result[x][y] + 1 }  // check right
    }
    return result;
};

let mat = [[0,0,0],[0,1,0],[1,1,1]]

console.log(updateMatrix(mat))
