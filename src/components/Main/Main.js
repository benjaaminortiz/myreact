import logo from './logo.svg';
import '../../CSS/Main.css';
import {Link} from 'react-router-dom'

function Main() {
  return (
    <div className="Main">
      <nav className="navbar sticky-top  navbar-expand-lg  navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Tasks</a>
  </div>
</nav>
      <header className="Main-header">
      
        <img src={logo} className="Main-logo" alt="logo" />
        <p>
          Edit <code>src/Main.js</code> and save to reload.
        </p>
        <Link to='/countries'>Go to Countries</Link>
      </header>
    </div>
  );
}

export default Main;
