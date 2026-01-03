import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero">
        <div className="bg-glow" />
        <div className="container hero-content">
          <h1>
            Vibe Code
            <br />
            Your Ideas, amplified.
          </h1>
          <p>
            Welcome to your new React + Vite playground. Built for speed, styled
            for impact.
          </p>

          <div
            className="card"
            style={{ maxWidth: "400px", margin: "2rem auto" }}
          >
            <p style={{ marginBottom: "1rem", fontSize: "0.9rem" }}>
              Interact with the vibe:
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setCount((count) => count + 1)}
            >
              Resonance Level: {count}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <a
              href="https://react.dev"
              target="_blank"
              className="btn btn-secondary"
            >
              React Docs
            </a>
            <a
              href="https://vitejs.dev"
              target="_blank"
              className="btn btn-secondary"
            >
              Vite Docs
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
