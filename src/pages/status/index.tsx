import { ActivityCard } from "../../component/activityCard";
import { CustomerTable } from "../customerTable";
import { ActivityData } from "../../data";

export const Status = () => {
  return (
    <div>
      <ActivityCard activities={ActivityData} />
      <CustomerTable />
    </div>
  );
};
