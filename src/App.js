import "./App.css";
// import Counter from "./features/counter/Counter";
import PostList from "./features/posts/postList";
import AddPostForm from "./features/posts/AddPostForm";
function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <AddPostForm></AddPostForm>
      <PostList></PostList>
    </div>
  );
}

export default App;
