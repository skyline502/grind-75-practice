//Flood Fill

/*
An image is represented by an m x n integer grid image where image[i][j] represents the
pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill
on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected
4-directionally to the starting pixel of the same color as the starting pixel,
plus any pixels connected 4-directionally to those pixels (also with the same color),
and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

Example 1:

starting graph:
1 1 1
1 1 0
1 0 1

sr = 1, sc = 1, color = 2;

resulting graph:
2 2 2
2 2 0
2 0 1

explanation:
We are given starting row of 1, and starting column of 1.
so graph[1][1] which is the center of our graph.
we then find all connecting neighbors, connecting as in touch from top/bottom/left/right,
we do this for all of its neighbors, if it is a connection, we change it to the provided color
once we do that we should get the resulting graph.
The bottom right 1, does not change because it isn't connected to our starting position.

*/

//your code here...
const floodFill = (sr, sc, graph) => {

};

//Examples:
let graph = [
  [1,1,1],
  [1,1,0],
  [1,0,1]
]

console.log(floodFill(1, 1, graph));
//output
//[
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1]
// ]