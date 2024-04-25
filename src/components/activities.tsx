import { activities } from "../data/activities";

export function Activities() {
  return (
    <ul className="text-left">
      {activities.map((activities) => {
        return (
          <li className="list-disc" key={activities.id}>
            {activities.title}
          </li>
        );
      })}
    </ul>
  );
}
