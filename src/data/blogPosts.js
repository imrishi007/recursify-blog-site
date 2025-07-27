export const blogPosts = [
  {
    number: 7,
    title: "Reverse Integer",
    difficulty: "Medium",
    excerpt: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, return 0.",
    url: "/posts/reverse-integer",
    tags: ["Math", "Integer"],
    readTime: "8"
  },
  {
    number: 1004,
    title: "Max Consecutive Ones III",
    difficulty: "Medium",
    excerpt: "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
    url: "/posts/1004_Max_Consecutive_Ones_III",
    tags: ["Array", "Sliding Window"],
    readTime: "7"
  },
  {
    number: 37, // New problem number
    title: "Sudoku Solver",
    difficulty: "Hard", // Sudoku Solver is typically Hard
    excerpt: "Solve a Sudoku puzzle by filling empty cells using a backtracking algorithm.",
    url: "/posts/37_Sudoku_Solver", // Updated URL
    tags: ["Backtracking", "Matrix", "DFS"],
    readTime: "12" // Estimate read time
  },
  {
    number: 2210,
    title: "Count Hills and Valleys in an Array",
    difficulty: "Easy",
    excerpt: "Count the number of hills and valleys in an array by checking neighbors and skipping equal values.",
    url: "/posts/2210_Count_Hills_And_Valleys",
    tags: ["Array", "Simulation"],
    readTime: "6"
  },
];

export function getDifficultyClass(difficulty) {
  switch (difficulty.toLowerCase()) {
    case 'easy': return 'difficulty-easy';
    case 'medium': return 'difficulty-medium';
    case 'hard': return 'difficulty-hard';
    default: return 'difficulty-medium';
  }
}
