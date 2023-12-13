import { useNavigate, useRouteError } from 'react-router-dom';
import Button from './Button';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p className="text-red-600">{error.data || error.message}</p>
      <Button onClick={() => navigate(-1)}>&larr; Go back</Button>
    </div>
  );
}

export default Error;
