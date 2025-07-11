import { useState } from "react";


const Navbar = ({setCategory}) => {

  const [theme,setTheme] = useState("dark");

    const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
  };


  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    <a className="navbar-brand"><span className="badge bg-light text-dark fs-3">Planet News</span></a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
      </ul>
      <div className="ms-auto d-flex align-items-center">

      <input className="form-check-input" type="checkbox" checked={theme === "light"} onChange={toggleTheme}/>
      <label className="form-check-label" htmlFor="themeToggle">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </label>
      </div>

    </div>
    
  </div>
</nav>
  )
}

export default Navbar