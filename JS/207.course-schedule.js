/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let graph = new Map(); // HashMap(current_course, int[neighbors])
  let indegree = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    if (graph.has(prerequisites[i][0])) {
      let neighbors = graph.get(prerequisites[i][0]);
      neighbors.push(prerequisites[i][1]);
      graph.set(neighbors);
    } else {
      graph.set(prerequisites[i][0], [prerequisites[i][1]]); // Initialize the first neighbor
    }
    indegree[prerequisites[i][1]]++; // Neighbor course indegree increase 1
  }

  let queue = [];
  indegree.forEach((degree, course_idx) => {
    if (degree === 0) queue.push(course_idx);
  });

  let res = [];
  let count_visited = 0;

  while (queue.length > 0) {
    let course = queue.shift();
    let neighbors = graph.get(course);
    res[count_visited++] = course;
    for (let i = 0; neighbors && i < neighbors.length; i++) {
      let n = neighbors[i];
      if (--indegree[n] === 0) {
        queue.push(n);
      }
    }
  }

  return count_visited === numCourses;
};
// @lc code=end
