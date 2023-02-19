import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-400 p-3 ">
        <Link href="/">
          <pa className="inline-flex items-center p-2 mr-4 ">
            <Image src="/logo.png" alt="" width={100} height={80} />
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              REVA Dhwani
            </span>
          </pa>
        </Link>
        <button className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <pa className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                Home
              </pa>
            </Link>
            <Link href="/podcastlist">
              <pa className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                PodCast
              </pa>
            </Link>
            <Link href="/studentlist">
              <pa className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Student List
              </pa>
            </Link>
            {/* <Link href="/">
              <pa className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Contact us
              </pa>
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};
