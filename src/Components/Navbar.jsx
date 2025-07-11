
const Navbar = ({setCatogery}) => {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-3">Planet News</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCatogery("technology")}>Technology</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCatogery("business")}>Business</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCatogery("health")}>Health</div>
        </li>

        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCatogery("sports")}>Sports</div>
        </li>

        <li className="nav-item">
          <div className="nav-link"  onClick={()=>setCatogery("entertainment")}>Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar