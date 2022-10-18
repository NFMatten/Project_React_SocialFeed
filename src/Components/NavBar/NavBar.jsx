import "./NavBar.css";

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <a className="active" href="#home">Social
                <small className="text-muted styling">Feed</small>
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;