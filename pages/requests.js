import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import { useState } from "react";
import { orderBy } from "lodash";
import RequestCard from "../components/requests/RequestCard";

function newrequests() {
  return (
    <Layout>
      <h1 className="text-primary text-xl font-bold mb-4">New NFT Requests</h1>

      <section class="py-3">
        <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEVkhZYAAACui2Hw8PAyjv39MzOgsbnGxsYfKzAqKipMOyhpipz6+vq4lGlLS0taeYm+oYMSFxqef1iOclCDm6ejtLz18+5Il/z7SUvu9vY6TFZAQEDPz88sOEAhISFlh5hSbXviWiZcgJNpj59IXmt8Y0X+9+57sPknif2bwPbx3+D+ICFlUDg3LCAeGBH///+MjIzgZjgnDwdoaGijo6OCNRhFHgruXymEtvf6P0AAAAQMEA4QFxwbIiVBVmQcHBwgGBQxJhUVDABnYFlYVVKmt711dXVOSEBLGgKzimQ/OS9ASVJxXkMnNTq13h3MAAADmklEQVR4nO3dDVPaMACAYZlO0coQUTd1EAbidH7NzX0IOve9uc3//3c2jyZ0tNS2NE0M73vn6Z1cyXPRC7SlnZkhIiIiIiIiIiIiIqLpS0yaZ1pwV/3aRF3UGrYTS5PW6JgmxCUQIkRoPISJhHauFsKT5TCHgw11rJKK1pZMjbR/5ddPJ7xUmzKtCiS8nfBIm4t+zVTA3vBH06xgUcKrbMJAplXBECJEaD53hcL/nuNqESUU0c9eQKIq+xAe3+RzqLZujCg65fCwpGsx5UuZuHaMvYDzECJEiBBh5vzlSRQvLGhhFHI/Q2HrYUfuIymGKKplWS88mr4sP2DpUj5fUXupqjkOPl1lhAgRIkSIECFChAgRIkSIECFChAgRIkSIEKFO4XFX9tlR4VFF9tFZ4QO/Y4QIESJEmFH4SQnv4Xq4/ShBX1ZkX5M8PKJG+EwFT+vnTobChZPlJG0OSvTYiE7WRehsk/n1Qd/W2nqFs0W0PK8UEijm/dbXNABNClUIESKcIuGy+0K/0UFt3H7FpB64GdOGBUL5uZjm95NR4+77x2Ob25eDf3H+ZGznNsyh6nVY+Hxvblx7+7tSePBwbAcIESJEiNA54eja75pw+6XMVeEwhAgRIkSIEGFA6Nh7/FGhM/tpYuYwxxAiRIhwOoQ914XBSyvMqsP2kxU8jm+D8Gi17reSX+pcjFb4ahiF/x8uqXNmckxtPeLqLQgRIkToirDnqlDkMIeVUFYJ2zcNv3424XW9G2rVIuHtyZ1+5WzCymH4r6BulVBJXRcK54XuzyFChAinWtgeCnV8GmFiYcLi5rCgECJEiBAhwmKF4f0alaGwMzZPLz5HYeVwKZQSlhvj0zu/eQqPStna0nqrPZ3CXi/icuhOCRPPoft/pQgRIjQv7MgbetsgrMf0YztVb/1+PmrJbBDG3dXj7GmqTt/5vZEb6OuYxLTCuKu3nC2k6vTZoKGwhhAhQoQI3RDmuh6OCm1YD69XY/rVTNPlK9nvtrxbqQXCf8axv5l4L4Ydr0tj4r0FQoQIESJMUPfQb3i4YitJEZ/FsFSojjh1ldBLkt5br+o4fhgQah17shAiRGg+hFMjjHtrH+7PRe22i1rfNG8mqbBeSlVjcDBJ91qeLE1C06xACBEiNB/CDMKe88JS6cbYyaQRpRXutBJUNa0KllZY9cTdmUb9V2qh6QGnDiFC+0OI0P4QIrQ/hAjtDyFC+7s/wr+GG6DXPBA4jgAAAABJRU5ErkJggg=="
                  alt="Hotel Photo"
                />
              </div>
              <div class="mt-1 p-2">
                <h2 class="text-slate-700">Adobe Photoshop CC 2022</h2>
                <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div class="mt-3 flex items-end justify-between">
                  <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <button class="text-sm">Verify Details</button>
                  </div>
                </div>
              </div>
            </a>
          </article>
          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEVkhZYAAACui2Hw8PAyjv39MzOgsbnGxsYfKzAqKipMOyhpipz6+vq4lGlLS0taeYm+oYMSFxqef1iOclCDm6ejtLz18+5Il/z7SUvu9vY6TFZAQEDPz88sOEAhISFlh5hSbXviWiZcgJNpj59IXmt8Y0X+9+57sPknif2bwPbx3+D+ICFlUDg3LCAeGBH///+MjIzgZjgnDwdoaGijo6OCNRhFHgruXymEtvf6P0AAAAQMEA4QFxwbIiVBVmQcHBwgGBQxJhUVDABnYFlYVVKmt711dXVOSEBLGgKzimQ/OS9ASVJxXkMnNTq13h3MAAADmklEQVR4nO3dDVPaMACAYZlO0coQUTd1EAbidH7NzX0IOve9uc3//3c2jyZ0tNS2NE0M73vn6Z1cyXPRC7SlnZkhIiIiIiIiIiIiIqLpS0yaZ1pwV/3aRF3UGrYTS5PW6JgmxCUQIkRoPISJhHauFsKT5TCHgw11rJKK1pZMjbR/5ddPJ7xUmzKtCiS8nfBIm4t+zVTA3vBH06xgUcKrbMJAplXBECJEaD53hcL/nuNqESUU0c9eQKIq+xAe3+RzqLZujCg65fCwpGsx5UuZuHaMvYDzECJEiBBh5vzlSRQvLGhhFHI/Q2HrYUfuIymGKKplWS88mr4sP2DpUj5fUXupqjkOPl1lhAgRIkSIECFChAgRIkSIECFChAgRIkSIEKFO4XFX9tlR4VFF9tFZ4QO/Y4QIESJEmFH4SQnv4Xq4/ShBX1ZkX5M8PKJG+EwFT+vnTobChZPlJG0OSvTYiE7WRehsk/n1Qd/W2nqFs0W0PK8UEijm/dbXNABNClUIESKcIuGy+0K/0UFt3H7FpB64GdOGBUL5uZjm95NR4+77x2Ob25eDf3H+ZGznNsyh6nVY+Hxvblx7+7tSePBwbAcIESJEiNA54eja75pw+6XMVeEwhAgRIkSIEGFA6Nh7/FGhM/tpYuYwxxAiRIhwOoQ914XBSyvMqsP2kxU8jm+D8Gi17reSX+pcjFb4ahiF/x8uqXNmckxtPeLqLQgRIkToirDnqlDkMIeVUFYJ2zcNv3424XW9G2rVIuHtyZ1+5WzCymH4r6BulVBJXRcK54XuzyFChAinWtgeCnV8GmFiYcLi5rCgECJEiBAhwmKF4f0alaGwMzZPLz5HYeVwKZQSlhvj0zu/eQqPStna0nqrPZ3CXi/icuhOCRPPoft/pQgRIjQv7MgbetsgrMf0YztVb/1+PmrJbBDG3dXj7GmqTt/5vZEb6OuYxLTCuKu3nC2k6vTZoKGwhhAhQoQI3RDmuh6OCm1YD69XY/rVTNPlK9nvtrxbqQXCf8axv5l4L4Ydr0tj4r0FQoQIESJMUPfQb3i4YitJEZ/FsFSojjh1ldBLkt5br+o4fhgQah17shAiRGg+hFMjjHtrH+7PRe22i1rfNG8mqbBeSlVjcDBJ91qeLE1C06xACBEiNB/CDMKe88JS6cbYyaQRpRXutBJUNa0KllZY9cTdmUb9V2qh6QGnDiFC+0OI0P4QIrQ/hAjtDyFC+7s/wr+GG6DXPBA4jgAAAABJRU5ErkJggg=="
                  alt="Hotel Photo"
                />
                <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="ml-1 text-sm text-slate-400">4.9</span>
                </div>
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-slate-700">The Hilton Hotel</h2>
                <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div class="mt-3 flex items-end justify-between">
                  <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <button class="text-sm">Verfiy Details</button>
                  </div>
                </div>
              </div>
            </a>
          </article>

          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img
                  src="https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631"
                  alt="Hotel Photo"
                />
                <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"></div>
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-slate-700">The Hilton Hotel</h2>
                <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div class="mt-3 flex items-end justify-between">
                  <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <button class="text-sm">Verify Details</button>
                  </div>
                </div>
              </div>
            </a>
          </article>

          <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Hotel Photo"
                />
                <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600"></div>
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-slate-700">The Hilton Hotel</h2>
                <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div class="mt-3 flex items-end justify-between">
                  <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <button class="text-sm">Verify Details</button>

                  </div>
                </div>
              </div>
            </a>
          </article>
         
        </div>
      </section>
    </Layout>
  );
}

export default newrequests;
