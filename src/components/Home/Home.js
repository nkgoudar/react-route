import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
    <h1>Home component</h1>
    <ul>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
       </li>
    </ul>
  </div>
  )
}

export default Home;