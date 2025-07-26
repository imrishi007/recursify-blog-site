// Blog posts data - add new posts here
export const blogPosts = [
  {
    number: 7,
    title: "Reverse Integer",
    difficulty: "Medium",
    excerpt: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, return 0.",
    url: "/posts/reverse-integer",
    tags: ["Math", "Integer"],
    readTime: "8 min read"
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