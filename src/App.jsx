import { useEffect, useReducer, useState } from "react";
import { fetchPosts } from "./api/postsApi.js";
import { postsReducer, initialState } from "./reducer/postsReducer.js";
import PostList from "./components/PostList.jsx";
import FilterForm from "./components/FilterForm.jsx";

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });

      try {
        const data = await fetchPosts();
        if (!ignore) {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      } catch (error) {
        if (!ignore) {
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    }

    loadPosts();

    return () => {
      ignore = true;
    };
  }, []);

  const query = filter.trim().toLowerCase();
  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(query)
  );

  let content;
  if (state.loading) {
    content = <p>Loading posts...</p>;
  } else if (state.error) {
    content = <p style={{ color: "crimson" }}>Error: {state.error}</p>;
  } else if (filteredPosts.length === 0) {
    content = <p>No posts found.</p>;
  } else {
    content = <PostList posts={filteredPosts} />;
  }

  return (
    <div>
      <h1>Post Dashboard</h1>
      <FilterForm value={filter} onChange={setFilter} />
      {content}
    </div>
  );
}

export default App;