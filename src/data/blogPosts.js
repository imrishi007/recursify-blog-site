// Blog posts data - add new posts here
export const blogPosts = [
  {
    number: 1,
    title: "Two Sum",
    difficulty: "Easy",
    excerpt: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    url: "/posts/two-sum",
    tags: ["Array", "Hash Table"],
    readTime: "5 min read"
  },
  {
    number: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    excerpt: "You are given two non-empty linked lists representing two non-negative integers stored in reverse order.",
    url: "/posts/add-two-numbers",
    tags: ["Linked List", "Math"],
    readTime: "8 min read"
  },
  {
    number: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    excerpt: "Given a string s, find the length of the longest substring without repeating characters.",
    url: "/posts/longest-substring",
    tags: ["String", "Sliding Window"],
    readTime: "10 min read"
  },
  {
    number: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    excerpt: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays in O(log(m+n)) time.",
    url: "/posts/median-sorted-arrays",
    tags: ["Array", "Binary Search"],
    readTime: "15 min read"
  },
  {
    number: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    excerpt: "Given a string s, return the longest palindromic substring in s using dynamic programming approach.",
    url: "/posts/longest-palindrome",
    tags: ["String", "Dynamic Programming"],
    readTime: "12 min read"
  },
  {
    number: 6,
    title: "ZigZag Conversion",
    difficulty: "Medium",
    excerpt: "The string 'PAYPALISHIRING' is written in a zigzag pattern and then read line by line.",
    url: "/posts/zigzag-conversion",
    tags: ["String", "Simulation"],
    readTime: "7 min read"
  }
];

export function getDifficultyClass(difficulty) {
  switch (difficulty.toLowerCase()) {
    case 'easy': return 'difficulty-easy';
    case 'medium': return 'difficulty-medium';
    case 'hard': return 'difficulty-hard';
    default: return 'difficulty-medium';
  }
}