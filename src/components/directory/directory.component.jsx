import MenuItem from '../menu-item/MenuItem.component'
import './directory.styles.scss'

const Directory =({sections}) => {
    return (
        <>
         <div className='directory-menu'>
             {
                 sections.map(menu => <MenuItem menu = {menu} /> )
             }
             
              </div>
        </>
    )
}


export default Directory
    
    
