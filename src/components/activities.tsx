import { useState } from "react";
import { dataActivities } from "../data/activities";

export function Activities() {
  const [activites, setActivities] = useState(dataActivities);

  function removeActivities(id: number) {
    const updatedActivities = activites.filter(
      (activites) => activites.id != id
    );
    setActivities(updatedActivities);
  }

  return (
    <ul className="text-left">
      {activites.map((activities) => {
        return (
          <li className="list-disc" key={activities.id}>
            <div>{activities.title}</div>
            <button onClick={() => removeActivities(activities.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
