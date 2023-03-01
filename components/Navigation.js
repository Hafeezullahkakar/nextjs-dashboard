import { useRouter } from "next/router";
import Link from "next/link";
import { TbCoin } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineVideoCall } from "react-icons/md";

export default function Navigation() {
  const router = useRouter();
  const { pathname } = router;
  const activeClasses =
    "bg-white flex items-center text-primary gap-2 px-2 py-4 md:px-4 py-1 pr-2 md:pr-7 mb-2 rounded-xl rounded-r-none justify-center md:justify-start";
  const inactiveClasses =
    "block px-2 md:px-4 pr-2 md:pr-7 py-1 mb-2 flex items-center gap-2 justify-center md:justify-start";
  const links = [
    { url: "/", label: "Dashboard", icon: <RxDashboard /> },
    {
      url: "/requests",
      label: "Requests",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      ),
    },
    { url: "/nft/listednfts", label: "NFT List", icon: <TbCoin /> },
    // {url:'/nft/singlenft',label:'NFT List',icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>},
    {
      url: "/nft/meetings",
      label: "Meetings",
      icon: <MdOutlineVideoCall />,
    },
    {
      url: "/profile",
      label: "Profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];
  return (
    <aside className="bg-[#d7e1ee] text-primary p-1 md:p-5 py-12 pr-0 md:pr-0">
      <Link href="/">
        <h1 className=" hidden md:flex mb-6 mt-3 text-center text-xl font-bold justify-center mr-5 gap-1 cursor-pointer">
          BlockLand
        </h1>
      </Link>
      <nav className="sticky top-5 mt-5">
        {links.map((link) => (
          <Link key={link.url} href={link.url}>
            <a
              className={
                pathname === link.url ? activeClasses : inactiveClasses
              }
            >
              {link.icon}
              <span className="hidden md:block py-1">{link.label}</span>
            </a>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
