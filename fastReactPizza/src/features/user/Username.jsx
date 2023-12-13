import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;

  return (
    <div className="hidden text-sm font-bold md:block">
      <span>{username}</span>
    </div>
  );
}
export default Username;
