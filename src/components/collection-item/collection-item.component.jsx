import CollectionPreview from '../collection-preview/collection-preview.component'
import './collection-item.styles.scss'

const CollectionItem = ({item}) => {
    const{name,imageUrl,price} = item
    return (
        <>
        <div className = 'collection-item'>
            <div 
            className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
            />
               <span className='name'>{name}</span> 
               <span className='price'>${price}</span> 
               
            </div>
        
        </>
    )
}
export default CollectionItem;