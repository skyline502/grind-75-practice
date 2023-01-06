/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
*/

const closestKPoints = (arr, k) => {
  let distances = []
  let points = {}
  let results = []

  for (let point of arr) {
    let length = Math.sqrt(Math.pow(point[0],2) + Math.pow(point[1], 2)).toFixed(2);
    distances.push(length);

    if(!points[length]) {
      points[length] = [point]
    } else {
      points[length].push(point)
    }
  }
  distances.sort()
  for (let i = 0; i < k; i++) {
    let p = points[distances[i]];
    if (p.length === 1) {
      results.push(p[0]);
    } else if ((i + 1) < k) {
      results.push(p[0])
      results.push(p[1])
    }
    console.log(p[0])
  }
  return results;
}

let input = [[1,3], [-2,2]]
let k = 1

console.log(closestKPoints(input,k))

input = [[3,3],[5,-1],[-2,4]]
k = 2

console.log(closestKPoints(input,k))
