import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss'



  const HomePage = ({sections}) => {
    return (
      <>
       <div className='homepage'>
         <h1>Welcome to my HomePage</h1>
         <Directory sections = {sections}/>
       </div>
      
      
      </>
    )
  }
}


export default HomePage
         
         
