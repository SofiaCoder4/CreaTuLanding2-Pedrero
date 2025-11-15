import ItemCount from './ItemCount';

const ItemDetail = ({ title, price, img }) => {
  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">Precio: ${price}</p>
          <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
