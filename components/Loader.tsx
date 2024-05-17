import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <FaSpinner className="animate-spin" size={50} />
    </div>
  );
};

export default Loader;
