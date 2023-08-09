import { useState } from "react";

function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [rangeValue, setRangeValue] = useState(50);


  const handleModalToggle = (content: string) => {
    setIsModalOpen(!isModalOpen);
    setModalContent(content);
  };


  return (

    <div className="">
      <div
        className="p-5 text-center container bg-image flex justify-center items-center" // Add 'items-center' class to center vertically
        style={{
          backgroundSize: "contain",
          backgroundImage:
            "url('https://img.freepik.com/free-vector/gdpr-concept-illustration_114360-7177.jpg?w=996&t=st=1691498366~exp=1691498966~hmac=d6c3e7b631e6e6a0b165ef4bf0b52236a6ca8a2329b1006feb0163a6b72e9455)",
          height: "350px",
          backgroundRepeat: "no-repeat", // Add this line to avoid image repeating
          backgroundPosition: "center", // Add this line to center the image both horizontally and vertically
        }}
      ></div>

      <div className=" md:flex justify-center">
        <button
          type="button"
          className="w-full text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-sm px-5 py-3 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          onClick={() => handleModalToggle('GenPass')}
        >
          Generate Password
        </button>
        <button
          type="button"
          className="w-full text-white border border-yellow-400 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-sm px-5 py-3 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          onClick={() => handleModalToggle('AddPass')}
        >
          Add Password
        </button>
      </div>
      <>
        {/* Modal toggle */}

        {/* Generate Password modal */}
        {modalContent == 'AddPass' ? (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg dark:bg-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Add Password</h2>
                <button
                  className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
                  onClick={() => handleModalToggle('')}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.354 5.646a.5.5 0 010 .708L10.707 10l3.647 3.646a.5.5 0 11-.708.708L10 10.707l-3.646 3.647a.5.5 0 01-.708-.708L9.293 10 5.646 6.354a.5.5 0 01.708-.708L10 9.293l3.646-3.647a.5.5 0 01.708 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Rest of the modal content */}
              <input
                type="text"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:text-white"
              />
              {/* ... Continue with other form fields and options */}
              <div className="mt-4">
                <div className="flex justify-between flex-row items-center">
                  <span>Length</span>
                  <div className="badge badge-primary p-3 rounded-5">
                    {rangeValue}
                  </div>
                </div>
              </div>
              <input
                id="medium-range"
                type="range"
                min={5}
                max={64}
                step={1}
                value={rangeValue}
                onChange={(e) => setRangeValue(parseInt(e.target.value))}
                className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              {/* ... Continue with the other options */}
              <div className="mt-3">
                <div className="flex justify-between flex-row">
                  <label
                    htmlFor="numberCheck"
                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Include Numbers
                  </label>
                  <label className="relative inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between flex-row">
                  <label
                    htmlFor="numberCheck"
                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Include Uppercase letters
                  </label>
                  <label className="relative inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between flex-row">
                  <label
                    htmlFor="numberCheck"
                    className="text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Include Symbols

                  </label>
                  <label className="relative inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              {/* ... Continue with the other options */}
              <div className="mt-3">
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    className="w-full text-yellow-400  border border-yellow-400  focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-sm  py-2.5 text-center  mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"

                  // onClick={() => setPageReload(!pageReload)}
                  >
                    Generate new
                  </button>
                </div>
              </div>
              {/* ... Continue with the error display */}
              {/* {err && (
              <div className="mt-3 text-red-500">
                <p>{err}</p>
              </div>
            )} */}

              <div className="flex justify-end mt-6">
                <button
                  className="text-yellow-500 hover:text-red-800 dark:text-gray-300 dark:hover:text-gray-100 mr-4 focus:outline-none"
                  onClick={() => handleModalToggle('')}
                >
                  Close
                </button>
                <button
                  // className="bg-red-500 text-white px-4 py-2.5 text-sm rounded-lg disabled:opacity-50 focus:outline-none"
                  className="ml-2 text-white border border-yellow-400 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                // onClick={addPassword}
                // disabled={appName === "" || userName === "" || password === ""}
                >
                  Save
                </button>
              </div>
            </div>
          </div>

        ) : modalContent == 'GenPass' ?

          <div
            className="fixed top-14 left-0 right-0 flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-w-3xl mx-auto"
            id="authentication-modal"
            aria-hidden="true"
          >
            <div className=" w-full max-w-3xl mx-auto max-h-full ">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleModalToggle('')}

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
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-16">
                  <h3 className="mb-4 flex justify-start shadow-sm text-xl font-medium text-gray-900 dark:text-white ">
                    Generate Password
                  </h3>
                  <div className="ps-2 pe-2 mt-3">
                    <input
                      readOnly
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      id="form1"
                      type="text"
                      // size="lg"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  {/* Rest of the content */}
                  <div className="mt-4">
                    <div className="flex justify-between flex-row items-center">
                      <span>Length</span>
                      <div className="badge badge-primary p-3 rounded-5">
                        {rangeValue}
                      </div>
                    </div>

                    <input
                      id="medium-range"
                      type="range"
                      min={5}
                      max={64}
                      step={1}
                      value={rangeValue}
                      onChange={(e) => setRangeValue(parseInt(e.target.value))}
                      className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />

                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between flex-row">
                      <label
                        htmlFor="numberCheck"
                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Include Numbers
                      </label>
                      <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between flex-row">
                      <label
                        htmlFor="capCheck"
                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Include Uppercase letters
                      </label>
                      {/* <input
                        type="checkbox"
                        id="capCheck"
                        // checked={option.upperCase}
                        // onChange={(e) =>
                        //   setOption({ ...option, upperCase: e.target.checked })
                        // }
                        className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      /> */}
                      <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between flex-row">
                      <label
                        htmlFor="sympolCheck"
                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Include Symbols
                      </label>
                      <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <button
                      // onClick={() => setRefresh(!refresh)}
                      type="button"
                      className="w-full text-yellow-400  border border-yellow-400  focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-sm  py-2.5 text-center  mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                    >
                      Generate new
                    </button>
                  </div>
                </div>
                <div className="px-6 py-4 lg:px-8">
                  <button
                    onClick={() => handleModalToggle('')}
                    className="text-yellow-400  border border-yellow-400 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-blue-800 ml-auto"
                  >
                    Close
                  </button>
                  <button
                    // onClick={() => {
                    //   copyToClipboard(password);
                    //   setCopyOpen(true);
                    // }}
                    className="ml-2 text-white border border-yellow-400 bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  >
                    Copy to Clipboard
                  </button>
                </div>


              </div>
            </div>
          </div>


          : " "}

      </>

      <div className=" flex justify-start  m-5 ml-5 tracking-wide text-slate-800 text-xl font-bold mb-2">
        Saved Passwords
      </div>

      <div className="mt-5">
        {/* <h5 className='text-xl font-bold'>Saved Passwords</h5> */}
        <div className="mt-3">
          {/* {list[0] &&
        list.map((item, index) => ( */}
          <div
            //  key={index}
            className="mb-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://lh4.googleusercontent.com/zxHGfDuP9OcnUCHnOaV77PUez3jUnliiGJr4GmdExFZxMe5X3nqG9R8qTcBFcknkQ_lxT-rtQS42jXWqWr9E-xMNv50ri-pFg-HdQi_MQ-j75jkYuf5KILd8RdG8SC4zp8FMqJME9_atihTsBujbVdQAj_jwd6I0Tc3XP0stjsW_AHxAuX-OED49xizrBA"
                  style={{ height: 65 }}
                  className="rounded-full"
                  alt="Profile"
                />
                <div className="ms-3">
                  <p className="font-bold mb-1">Instagram</p>
                  <p className="text-gray-500 mb-0">Sarathdev </p>
                </div>
              </div>
              <div className=" p-2">
                <button
                  className="text-blue-600 hover:text-blue-700 focus:outline-none mr-4 w-full"
                // onClick={() => deletePassword(item._id)}
                >
                  Delete
                  <svg
                    className="w-5 h-5 inline-block ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                <button
                  className="text-red-500 hover:text-red-600 focus:outline-none mr-4"
                // onClick={() => {
                //   copyToClipboard(item.password);
                //   setOpen(true);
                // }}
                >
                  Copy password
                  <svg
                    className="w-5 h-5 inline-block ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 20h9a2 2 0 002-2V6a2 2 0 00-2-2h-3M7 14H3a2 2 0 01-2-2v-3a2 2 0 012-2h4m8 8v2m0 0H9m0 0v-2m0 2h6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
         
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
