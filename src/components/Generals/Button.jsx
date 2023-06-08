import loadingIcon from "../../Assets/loading.gif";

function Button({ title, type, loading }) {
  return (
    <button
      className="w-40 px-2 py-2 text-white text-center font-medium tracking-wider bg-[#2c2c37] hover:bg-[#3d4242] focus:ring-1 focus:bg-[#3d4242	]  mt-6 duration-500 cursor-pointer text-sm focus:outline-none border "
      type={type}
    >
      {loading ? <img className="w-4" src={loadingIcon} alt="x" /> : title}
    </button>
  );
}

export default Button;
