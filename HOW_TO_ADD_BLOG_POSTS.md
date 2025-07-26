# How to Add New Blog Posts to RECURSIFY

## Quick Start Guide

To add a new blog post to RECURSIFY, follow these 3 simple steps:

### Step 1: Add Post Metadata
Edit `src/data/blogPosts.js` and add your new post to the `blogPosts` array:

```javascript
{
  number: 7, // Next available number
  title: "Your Problem Title",
  difficulty: "Medium", // Easy, Medium, or Hard
  excerpt: "Brief description of the problem for the homepage",
  url: "/posts/your-post-slug", // URL slug for your post
  tags: ["Array", "Dynamic Programming"], // Relevant algorithm tags
  readTime: "10 min read" // Estimated reading time
}
```

### Step 2: Create the Blog Post File
1. Copy the template file `templates/blog-post-template.astro`
2. Rename it to `src/pages/posts/your-post-slug.astro` (matching the URL from Step 1)
3. Edit the template and replace all placeholder content with your actual content

### Step 3: Customize Your Post
In your new `.astro` file, update these variables at the top:

```javascript
const POST_NUMBER = 7; // Your LeetCode problem number
const POST_TITLE = "Your Problem Title";
const POST_DIFFICULTY = "Medium"; // Easy, Medium, or Hard
const POST_DESCRIPTION = "SEO description";
const LEETCODE_URL = "https://leetcode.com/problems/your-problem";
const POST_TAGS = ["Array", "Hash Table"]; // Algorithm tags
```

## Template Structure

The blog post template includes these sections:

### Required Sections:
- **Problem Statement**: The actual LeetCode problem description
- **Examples**: Input/output examples with explanations
- **Optimal Solution**: Your main solution approach
- **Complexity Analysis**: Time and space complexity
- **Key Insights**: Important takeaways

### Optional Sections:
- **Brute Force Approach**: Less optimal solution for comparison
- **Visual Explanation**: Step-by-step walkthrough
- **Follow-up Questions**: Related problems or variations

## Writing Tips

### Code Blocks
Use collapsible code sections for better readability:

```html
<details class="code-section" open>
  <summary class="code-header">
    <span>Your Solution Title</span>
    <svg>...</svg>
  </summary>
  <div class="code-content glass">
    <pre><code class="language-python">
      <!-- Your code here -->
    </code></pre>
  </div>
</details>
```

### Syntax Highlighting
Use these CSS classes for Python syntax highlighting:
- `.keyword` - for `def`, `if`, `for`, `return`, etc.
- `.function` - for function names
- `.builtin` - for `len`, `range`, `enumerate`, etc.
- `.number` - for numeric literals
- `.comment` - for comments

### Content Boxes
Use these glassmorphism containers for different content types:
- `.problem-box` - Problem statements
- `.example-box` - Examples
- `.complexity-analysis` - Time/space complexity
- `.algorithm-steps` - Step-by-step algorithms
- `.insights-box` - Key insights
- `.followup-box` - Follow-up questions
- `.visual-explanation` - Visual walkthroughs

## File Structure

```
src/
├── data/
│   └── blogPosts.js          # Central post metadata
├── pages/
│   └── posts/
│       ├── two-sum.astro     # Example post
│       └── your-post.astro   # Your new post
└── components/
    ├── BlogPosts.astro       # Homepage post list
    └── Navbar.astro          # Search functionality

templates/
└── blog-post-template.astro  # Copy this for new posts
```

## Example Workflow

1. **Choose a LeetCode problem** (e.g., "Valid Parentheses")

2. **Add to blogPosts.js**:
```javascript
{
  number: 20,
  title: "Valid Parentheses",
  difficulty: "Easy",
  excerpt: "Determine if the input string has valid parentheses using a stack.",
  url: "/posts/valid-parentheses",
  tags: ["String", "Stack"],
  readTime: "6 min read"
}
```

3. **Create the file**: `src/pages/posts/valid-parentheses.astro`

4. **Update the template variables** and replace placeholder content

5. **Test locally** by running the dev server and navigating to your post

## Search Integration

Posts are automatically included in the search functionality once added to `blogPosts.js`. The search looks through:
- Post titles
- Post excerpts
- Tags (indirectly through the title format)

## Navigation

The template includes automatic navigation:
- "← Back to Problems" returns to homepage
- "Next Problem →" can be customized to link to related posts
- The navbar search will find your post automatically

## Best Practices

1. **Keep excerpts concise** (1-2 sentences max)
2. **Use descriptive tags** that match common algorithm categories
3. **Include complexity analysis** for all solutions
4. **Add visual explanations** for complex algorithms
5. **Test your post** on mobile devices
6. **Follow the existing style** for consistency

## Troubleshooting

- **Post not showing on homepage**: Check that it's added to `blogPosts.js`
- **Search not finding post**: Verify the title and excerpt in `blogPosts.js`
- **Styling issues**: Ensure you're using the provided CSS classes
- **Navigation broken**: Check that URLs match between `blogPosts.js` and your file name

That's it! Your new blog post will automatically appear on the homepage, be searchable, and maintain the same beautiful glassmorphism design as the rest of RECURSIFY.