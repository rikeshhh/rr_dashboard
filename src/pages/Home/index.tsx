import { ActivityCard } from "../../component/activityCard";
import { ReportData } from "../../data";

export const Home = () => {
  return (
    <div>
      <ActivityCard activities={ReportData} />
    </div>
  );
};
