/*

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.

*/
//My attempt
// const canTake = (numCourses, prereqs) => {
//   let taken = new Set()
//   let pre = {}
//   let stack = []

//   for (let course of prereqs) {
//     const [c, p] = course
//     //console.log(c, p)
//     if(!pre[c]){
//       pre[Number(c)] = [p]
//     } else {
//       pre[c].push(p)
//     }
//   }

//   console.log("pre", pre)

//   for (let i = 0; i < numCourses; i++){
//     console.log(taken, i)
//     console.log(pre[i],i)
//     if (i in pre) {
//       if(taken.has(pre[i][0])) {
//         taken.add(i)
//       } else {
//         stack.push(i)
//       }
//     } else {
//       taken.add(i)
//     }
//   }

//   return !stack.length
// }

//Easy to understand solution
The first step is to create the adjacency list. Using the values from Example 1,

Input: numCourses = 2, prerequisites = [[1,0]]
The adacency list will look like below, the way to think of it is, in order to take course 1, we need to take course 0, and whatever else might be in the array.

{
   1: [0]
}
So if we had the prerequisites value

prerequisites = [[4,3], [3, 2], [2,1]]
The adjacecny list will look like the below

{
    4: [3],
	3: [2],
	2: [1]
}
Course 4 depends on 3, 3 depends on 2, 2 depends on 1, and 1 has no prerequisites.

The visited object is used to keep track of which node we are currently at, once we travel through all the children, and see that there is no re-occurance of the current node (a cycle) we can remove the current node from the visited.

var canFinish = function(numCourses, prerequisites) {

    const preMap = {};
    const visited = {};

	// build the adacency list
    for(let i = 0; i< prerequisites.length; i++){
        if(preMap[prerequisites[i][0]] === undefined){
            preMap[prerequisites[i][0]] = [prerequisites[i][1]]
        } else {
            preMap[prerequisites[i][0]].push(prerequisites[i][1])
        }
    }
    console.log(preMap)
    const dfs = (node) => {
        if(visited[node]){
            return false;
        }
        if(preMap[node] !==undefined){
            if (preMap[node].length === 0){
                return true;
            }

            visited[node] = true;
            for(let val of preMap[node]){
                if(!dfs(val)){
                    return false
                }
            }
            visited[node] = false;

            preMap[node] = [];
        }
        return true;

    }

    for(let key in preMap){
        if(!dfs(key)){
            return false
        }
    }
    return true

};

//example
let numCourses = 2
let prerequisites = [[1,0]]

console.log(canTake(numCourses, prerequisites))
