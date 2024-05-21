import Layout from "@/components/Layout";
import { formatUTCDate } from "@/lib/utils";
import Link from "next/link";

const dates = [
  { name: "itsouk", date: "1983-09-14", utc: "12:00" },
  { name: "kellis", date: "1982-11-15", utc: "12:00" },
  { name: "kostakis", date: "1982-07-31", utc: "12:00" },
  { name: "lipis", date: "1982-07-08", utc: "10:00" },
  { name: "samanat", date: "1981-05-25", utc: "12:00" },
  { name: "telis", date: "1982-11-27", utc: "12:00" },
  { name: "tim", date: "1982-11-11", utc: "08:00" },
  { name: "topless", date: "1982-12-13", utc: "12:00" },
];

export default function Poures() {
  return (
    <Layout>
      <header className="p-4">
        <h1 className="text-center text-3xl">Poures Clan</h1>
      </header>

      <div className="grid grid-cols-3 gap-x-6 mt-4 max-w-lg m-auto text-nowrap">
        <div className="text-end text-gray-500 mb-2">Name</div>
        <div className="text-center text-gray-500">Date</div>
        <div className="text-gray-500">UTC</div>
        {dates
          .sort((a, b) => (a.date > b.date ? 1 : -1))
          .map((d) => (
            <>
              <Link
                className="text-end text-blue-500"
                href={`/?d=${d.date}&utc=${d.utc}&l=${d.name}`}
                key={d.name}
              >
                {d.name}
              </Link>

              <div className="text-center">
                {formatUTCDate(new Date(d.date))}
              </div>
              <div>{d.utc}</div>
            </>
          ))}
      </div>
    </Layout>
  );
}
