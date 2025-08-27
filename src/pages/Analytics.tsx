import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className="dark:text-white text-center p-5">
      <h1 className="text-4xl">This is Analytics list page</h1>
      <Link
        to="/login"
        className="bg-blue-700 p-3 px-5 rounded-lg my-5 inline-block text-white"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default Analytics;
