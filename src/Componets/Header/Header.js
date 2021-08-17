
import './Header.css'
import Web from './Web/Web'
import Mobile from './Mobile/Mobile'
import {useState} from 'react'

function Header() {
    const [open, setopen] = useState(false)
    return (
        <div className='navbar'>
            
            <div className="logo-portfolio">
                Portfolio
            </div>
            <div className="menus-header">
                <div className="web-menu">
                <Web />
                </div>
                <div className="mobile-menu">

                <div  onClick={()=>{setopen(!open)}} >
                <i className="fi-rr-apps menu-icon"></i>
                </div>
                {
                    open && <Mobile open={open} setopen={setopen} />
                }
                
                </div>
             
            </div>

        </div>
    )
}

export default Header
