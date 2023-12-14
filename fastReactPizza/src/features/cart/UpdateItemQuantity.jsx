import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(id));
  };
  return (
    <div className="space-x-4">
      <Button size="rounded" onClick={handleDecrease}>
        -
      </Button>
      <Button size="rounded" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}
export default UpdateItemQuantity;
