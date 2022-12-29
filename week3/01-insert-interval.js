/*

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the
ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents
the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals
(merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105

*/

//pseudo code
//check each interval in our intervals array, and if the start or the end is in the interval, combine the two together, and reassign the newInt to the combo
//else push the current interval into our output array
//return output after loop

var insertInterval = function(intervals, newInterval) {
  const result = []

  /*
  Three cases:
  1 - If we have already added newInterval or the current interval ends before the new one starts
  2 - If newInterval ends before the current one starts
  3 - If there is an overlap that requires a merge
  */

  for (const [start, end] of intervals) {
      if (!newInterval || end < newInterval[0]) {
          result.push([start, end])
      } else if (newInterval[1] < start) {
          result.push(newInterval)
          newInterval = null
          result.push([start, end])
      } else {
          newInterval[0] = Math.min(newInterval[0], start)
          newInterval[1] = Math.max(newInterval[1], end)
      }
  }

  // If newInterval has not been added it means it must be the last one
  if (newInterval) {
      result.push(newInterval)
  }

  return result
};

//Examples:
let intervals;
let newInterval;

intervals = [[1,3],[6,9]];
newInterval = [2,5];

console.log(insertInterval(intervals, newInterval))//=> [[1,5],[6,9]]
/*Explanation:
Because the start in [2,5] is a part of the original [1,3] interval, we combine the two into [1,5].
So the new Intervals are [[1,5],[6,9]]

*/

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
newInterval = [4,8];

console.log(insertInterval(intervals, newInterval));
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
