import { formatShortDate } from "@/lib/utils";
import Link from "next/link";

interface Props {
  people: {
    name: string;
    date: string;
    utc: string;
  }[];
}

const Birthdays = ({ people }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-x-6 mt-4 max-w-lg m-auto text-nowrap">
      <div className="text-end text-gray-500 mb-2">Name</div>
      <div className="text-center text-gray-500">Date</div>
      <div className="text-gray-500">UTC</div>
      {people
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .map((d) => (
          <>
            <Link
              className="text-end text-blue-500"
              href={`/?d=${d.date}&utc=${d.utc}&l=${d.name}`}
              key={`${d.name}-${d.date}-${d.utc}`}
            >
              {d.name}
            </Link>

            <div className="text-center">
              {formatShortDate(new Date(d.date))}
            </div>
            <div>{d.utc}</div>
          </>
        ))}
    </div>
  );
};

export default Birthdays;
