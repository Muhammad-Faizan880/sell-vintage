import StepperForm from "./stepperForm";

export default function Drawer({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop / Overlay */}
      <div
        onClick={onClose}
        // className={`fixed inset-0 z-30 transition-opacity duration-300 
        // ${
        //   isOpen
        //     ? "bg-black/10 backdrop-blur-sm opacity-30"
        //     : "opacity-0 pointer-events-none"
        // }`}
      ></div>

      {/* Drawer */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-full sm:w-[60%] md:w-[40%] lg:w-[40%] xl:w-[25%] transition-transform duration-300 dark:bg-gray-800
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClose}
          type="button"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <StepperForm />
      </div>
    </>
  );
}
