import DashboardBoxes from "./DashbaordBoxes";
import SalesStats from "./SalesStats";
import WelcomeRow from "./WelcomeRow";
import Stats from "./Stats";

export default function Dashboard() {
  return (
    <>
      <WelcomeRow />
      <div className="md:flex gap-10">
        <div className="md:w-8/12 grow">
          <Stats />
          {/* <DashboardBoxes /> */}
          <SalesStats />
          <SalesStats />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
