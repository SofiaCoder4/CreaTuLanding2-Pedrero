import { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
      <button className="btn btn-outline-danger" onClick={handleDecrement} disabled={count <= 1}>-</button>
      <span className="fs-4">{count}</span>
      <button className="btn btn-outline-success" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ItemCount;

