import Link from "next/link";


function Login() {
  return (
    <div class="flex items-center justify-center h-screen  ">
      <div class="w-1/3 flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
        <div class="mb-8 flex justify-center">
          <h1 className="text-bold text-2xl">BlockLand</h1>
        </div>
        <div class="flex flex-col text-sm rounded-md">
          <input
            class="mb-5 bg-secondary-content rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-primary "
            type="text"
            placeholder="Username or Email id"
          />
          <input
            class="border bg-secondary-content rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-primary"
            type="password"
            placeholder="Password"
          />
        </div>
        <Link href="/">
          <button
            class="mt-5 w-full border p-2  bg-primary  text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
            type="submit"
          >
            Sign in
          </button>
        </Link>
       

        {/* <div class="mt-5 flex text-center text-sm text-gray-400">
          <p>
            This site is protected by reCAPTCHA and the Google <br />
            <a class="underline" href="">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a class="underline" href="">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
