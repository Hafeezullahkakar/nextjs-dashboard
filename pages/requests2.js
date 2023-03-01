import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import { useState } from "react";
import { orderBy } from "lodash";
import RequestCard from "../components/requests/RequestCard";

function newrequests() {
  return (
    <Layout>
      <h1 className="text-primary text-xl font-bold mb-4">New NFT Requests</h1>
      <div className="flex flex-wrap gap-5">
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
    </Layout>
  );
}

export default newrequests;
