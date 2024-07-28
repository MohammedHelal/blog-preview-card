import "./App.css";
import illustration from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";

function App() {
  return (
    <div className="card">
      <img src={illustration} alt="article illustraion" />
      <button>Learning</button>
      <p>Published 21 Dec 2023</p>
      <h1>HTML & CSS foundations</h1>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="flex">
        <img src={avatar} alt="user profile image" />
        <h4>Greg Hooper</h4>
      </div>
    </div>
  );
}

export default App;
