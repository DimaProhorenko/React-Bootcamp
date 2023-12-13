import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="container py-10 lg:py-16">
      <h1 className="mb-4 text-center text-xl font-bold text-stone-700 lg:text-2xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!username && <CreateUser />}
    </div>
  );
}

export default Home;
