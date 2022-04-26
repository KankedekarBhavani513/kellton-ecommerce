import { Children } from "react"

const CustomButton = ( {children, ...otherProps}) => {
    <button 
    {...otherProps}
    className='custom-button'>

    {children}
    </button>
}