import Item from "../Item/Item"



// eslint-disable-next-line react/prop-types
const ItemList = ({products}) => {
  return (
    <div>
        {
            // eslint-disable-next-line react/prop-types
            products.map( prod => {
                return <Item key={prod.id} {...prod} />
            })
        }
    </div>
  )
}

export default ItemList