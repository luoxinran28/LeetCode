/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let graph = new Map(); // HashMap(current_course, int[neighbors])
  let indegree = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    if (graph.has(prerequisites[i][1])) {
      let neighbors = graph.get(prerequisites[i][1]);
      neighbors.push(prerequisites[i][0]);
      graph.set(neighbors);
    } else {
      graph.set(prerequisites[i][1], [prerequisites[i][0]]); // Initialize the first neighbor
    }
    indegree[prerequisites[i][0]]++; // Neighbor course indegree increase 1
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
  if (count_visited === numCourses) return res;
  return [];
};

// public class Solution {
//   /*
//    * @param numCourses: a total of n courses
//    * @param prerequisites: a list of prerequisite pairs
//    * @return: the course order
//    */
//   public int[] findOrder(int numCourses, int[][] prerequisites) {
//       // write your code here
//     HashMap<Integer, ArrayList<Integer>> graph = new HashMap<>();
//     int[] indegree = new int[numCourses];
//     for(int i = 0; i < prerequisites.length; i++) {
//       if(graph.containsKey(prerequisites[i][1])) {
//         ArrayList<Integer> neighbors = graph.get(prerequisites[i][1]);
//         neighbors.add(prerequisites[i][0]);
//         graph.put(prerequisites[i][1], neighbors);
//       } else {
//         ArrayList<Integer> newList = new ArrayList<Integer>();
//         newList.add(prerequisites[i][0]);
//         graph.put(prerequisites[i][1], newList); // Initialize the first neighbor
//       }
//       indegree[prerequisites[i][0]]++; // Neighbor course indegree increase 1
//     }

//     Queue<Integer> queue = new LinkedList<>();
//     for(int i = 0; i < indegree.length; i++) {
//       if(indegree[i] == 0) queue.offer(i);
//     }
//     int[] res = new int[numCourses];
//     int count_visited = 0;
//     while(queue.size() > 0) {
//       int course = queue.poll();
//       res[count_visited++] = course;
//       List<Integer> neighbors = graph.get(course);
//       for(int i = 0; neighbors != null && i < neighbors.size(); i++) {
//         int n = neighbors.get(i);
//         if(--indegree[n] == 0) {
//           queue.offer(n);
//         }
//       }
//     }
//     if(count_visited == numCourses) return res;
//     return new int[]{};
//   }

// }

// @lc code=end
