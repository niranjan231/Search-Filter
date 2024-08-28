import data from "./data";
import "./App.css"
import { useState } from "react";


function App() {
  const [search,setSearch] = useState("");
  const handleSearch=(e)=>{
setSearch(e.target.value);
console.log(e.target.value);
  }
  return (
    <div className="table-1" style={{textAlign:"center"}}>
      <div>
        <input onChange={handleSearch} type="text" placeholder="search"></input>
      </div>

     <table class="table caption-top">
  <thead>
    <tr>
      <th scope="col">Sequence</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    {
      data.filter((item)=>{
        return search.toLowerCase()===" " ? item : 
        item.firstName.toLowerCase().includes(search);
      }).map((item)=>{
       return <tr>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
      </tr>
      })
    }
  </tbody>
</table>
    </div>
  );
}

export default App;
