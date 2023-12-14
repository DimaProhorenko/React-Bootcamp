import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ id, itemQuantity }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(id));
  };
  return (
    <div className="space-x-2">
      <Button size="rounded" onClick={handleDecrease}>
        -
      </Button>
      {itemQuantity && (
        <span className="text-sm font-medium">{itemQuantity}</span>
      )}
      <Button size="rounded" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}
export default UpdateItemQuantity;
