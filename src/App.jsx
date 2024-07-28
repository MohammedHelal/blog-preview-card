import "./App.css";

function App() {
  return (
    <div className="card">
      <img
        src="./src/assets/images/illustration-article.svg"
        alt="card image"
      />
      <button>Learning</button>
      <p>Published 21 Dec 2023</p>
      <h1>HTML & CSS foundations</h1>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div className="flex">
        <img src="./src/assets/images/image-avatar.webp" alt="" />
        <h4>Greg Hooper</h4>
      </div>
    </div>
  );
}

export default App;
