import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
