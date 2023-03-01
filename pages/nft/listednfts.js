import Layout from "../../components/Layout";
import Link from "next/link";

export default function Products() {
  const data = [
    {
      name: "NFT1",
      price: 1200,
      owner: "Hafeez",
    },
    {
      name: "NFT2",
      price: 13223,
      owner: "kakar",
    },
  ];
  return (
    <Layout>
      <h1 className="text-primary text-xl font-bold mb-4">Listed NFTs</h1>

      <div class="relative bg-white shadow shadow-md sm:rounded-lg">
        <table class="w-full bg-white text-sm text-left text-gray-500">
          <thead class="text-xs text-primary uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">
                NFT name
              </th>
              <th scope="col" class="px-6 py-3">
                Owner Name
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="bg-white border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Flat Size 1300ft
              </th>
              <td class="px-6 py-4">Hafeez</td>
              <td class="px-6 py-4">Flat</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">
                <Link
                  href={{
                    pathname: "/nft/singlenft",
                    query: { data:data},
                  }}
                >
                  <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    See Details
                  </a>
                </Link>
              </td>
            </tr>
            <tr class="border-b bg-gray-50  dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Banglaw
              </th>
              <td class="px-6 py-4">Josef</td>
              <td class="px-6 py-4">Apartment</td>
              <td class="px-6 py-4">$1999</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  See details
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
