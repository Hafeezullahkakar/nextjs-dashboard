export default function WelcomeRow() {
  return (
    <div className="flex mb-6 items-center">
      <div className="w-1/2 grow">
        <h1 className="text-primary text-xl">
          Welcome, <b>to Blockland</b>
        </h1>
      </div>
      {/* <div className="">
        <div className="bg-gray-200 flex items-center rounded-md overflow-hidden">
          <img
            className="h-8"
            src="https://avatars.githubusercontent.com/u/72004991?s=96&v=4"
            alt=""
          />
        </div>
      </div> */}

      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar  online">
        <div className="w-10 rounded-full">
          <img src="https://avatars.githubusercontent.com/u/72004991?s=96&v=4" />
        </div>
      </label>
      <ul tabIndex={0} className="menu text-primary menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-48">
        <li>
          <a className="justify-between">
            Profile
           
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </div>
  );
}
