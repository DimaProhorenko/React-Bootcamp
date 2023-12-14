import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(id));
  };

  return (
    <Button size="sm" onClick={handleDelete}>
      Delete
    </Button>
  );
}
export default DeleteItem;
