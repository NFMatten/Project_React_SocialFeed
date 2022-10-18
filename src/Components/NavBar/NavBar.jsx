import "./NavBar.css";

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <a className="active" href="https://github.com/NFMatten/Project_React_SocialFeed">Social
                <small className="text-muted styling">Feed</small>
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;