import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name submitted: ${name}`);
    setName("");
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button type="submit">Click Me!</button>
    </div>
  );
}

export default App;
