import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once");
  }, []);

  useEffect(() => {
    if(keyword !== ""){
      console.log("i run when 'keyword' changes" , keyword);
    }
  }, [keyword]);
  
  useEffect(() => {
      console.log("i run when 'counter' changes" , counter);
  }, [counter]);

  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search Here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;