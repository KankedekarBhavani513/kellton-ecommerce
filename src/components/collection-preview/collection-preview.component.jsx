//import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

const CollectionPreview = ({collection}) => {
    return (
        <>
        <div className='collection-preview'>
            <h1> {collection.title} </h1>
            {
                collection.items.map(
                           item => <CollectionItem
                                   key={item.id}
                                   item={item}
                               />
                       )
            }
            
               
            </div>
        </>
    )
}
export default CollectionPreview