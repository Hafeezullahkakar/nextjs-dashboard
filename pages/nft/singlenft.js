import React from "react";
import Layout from "../../components/Layout";
import SingleNFTDetails from "../../components/nftlists/SingleNFTDetails";
import { RxDashboard } from "react-icons/rx";
import { useRouter } from "next/router";
import { TbCoin } from "react-icons/tb";
import Link from "next/link";

function singlenft() {
  const router = useRouter();
  const data= router.query;



  return (
    <>
      <Layout>
        <div className="text-sm breadcrumbs">
          <ul>
            {/* <li>
              <Link href='/'>
              <a>
                <RxDashboard className="mr-1" />
                Dashboard
              </a>
              </Link>
            </li> */}
            <li>
              <Link href="/nft/listednfts">
                <a>
                  <TbCoin className="mr-1" />
                  NFT List
                </a>
              </Link>
            </li>
            <li>Single NFT Details</li>
          </ul>
        </div>

        <SingleNFTDetails data={data} />
        <p>{data?.data}</p>
      </Layout>
    </>
  );
}

export default singlenft;
