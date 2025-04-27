const LoginPromptModal = ({ onClose, Login }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 shadow-lg w-[90%] max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-4">Please Login or Signup</h2>
        <p className="mb-6">You need to be logged in to view this content.</p>
        <button
          onClick={onClose}
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded"
        >
          Close
        </button>
        <button
          onClick={Login}
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 mx-[5px] rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPromptModal;
