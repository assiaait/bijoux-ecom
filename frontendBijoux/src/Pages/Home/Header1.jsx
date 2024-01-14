import { Link } from "react-router-dom";


function Header1() {
        return(
            <div>
                    <div>
                        <div className='d-flex justify-content-between px-5 py-3'>
                            <h5 className='title'>Welcome TO Shop Jewelry</h5>
                            <ul className='d-flex justify-content-evenly list title'>
                                <li><Link className='title' to=""> Stores </Link></li>
                                <li className='li'><Link className='title' to="">Contact</Link> </li>
                                <li><Link className='title' to="/login">Login</Link></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
            </div>
        )
    
}
export default Header1;