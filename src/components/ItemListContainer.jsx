import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/products';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        setItems(data.filter((item) => item.category === categoryId));
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return (
    <div>
      {greeting && <h2>{greeting}</h2>}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
