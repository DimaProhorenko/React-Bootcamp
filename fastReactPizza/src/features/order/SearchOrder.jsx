import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    navigate(`/order/${query}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border- focus:ring- w-28 cursor-pointer rounded-full bg-yellow-200 px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-yellow-400 md:w-64"
      />
    </form>
  );
}
export default SearchOrder;
