import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PostForm />
      <hr />
      <Posts />
    </Provider>
  );
};

export default App;
