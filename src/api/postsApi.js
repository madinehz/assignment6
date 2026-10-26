const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// fetches all posts from the API and returns the parsed JSON.
// only data fetching logic here:no JSX,no React imports.
export async function fetchPosts() {
  const response = await fetch(POSTS_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts (status ${response.status})`);
  }

  return response.json();
}