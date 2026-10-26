# Assignment 6 – Post Dashboard

A React app (Vite) that loads posts from JSONPlaceholder, handles loading,
error and empty states with `useReducer`, and filters posts by title.

## How to run

npm install
npm run dev

## File organization

- `src/api/postsApi.js` – `fetchPosts()`: fetches posts and returns parsed JSON. No JSX, no React.
- `src/reducer/postsReducer.js` – initial state and a pure reducer for
  `FETCH_START`, `FETCH_SUCCESS`, `FETCH_ERROR` (always returns a new object).
- `src/App.jsx` – owns the async state (`useReducer`), fetches once on mount in
  `useEffect` with cleanup, keeps the filter text in `useState`, derives the
  filtered list during render, and shows loading / error / empty / list.
- `src/components/FilterForm.jsx` – controlled input for filtering by title.
- `src/components/PostList.jsx` – renders one `Post` per item with `.map()` and `key={post.id}`.
- `src/components/Post.jsx` – presentational component that shows `title` and `body`.

## Challenges

- `fetch` does not throw on HTTP errors like 404, so I check `response.ok` and throw myself.
- Avoiding state updates after unmount: I used an `ignore` flag in the effect cleanup.
- Understanding derived state: only `posts` is stored; the filtered list is calculated on every render.
- Testing loading and error states: I used Chrome DevTools network throttling and Offline mode.