import Layout from "@/components/Layout";
import Link from "next/link";

const dates = [
  { name: "itsouk", date: "1983-09-14", utc: "14:00" },
  { name: "kellis", date: "1982-11-15", utc: "12:00" },
  { name: "kostakis", date: "1982-07-31", utc: "12:00" },
  { name: "lipis", date: "1982-07-08", utc: "10:00" },
  { name: "samanat", date: "1981-05-25", utc: "12:00" },
  { name: "telis", date: "1982-11-27", utc: "12:00" },
  { name: "tim", date: "1982-11-11", utc: "08:00" },
  { name: "topless", date: "1982-12-13", utc: "12:00" },
];

export default function Secret() {
  return (
    <Layout>
      <header className="pt-4">
        <h1 className="text-center text-3xl">Secrets</h1>
      </header>

      <div className="flex flex-col text-center mt-4">
        {dates.map((d) => (
          <Link href={`/?d=${d.date}&utc=${d.utc}&l=${d.name}`} key={d.name}>
            {d.name}
          </Link>
        ))}
      </div>
    </Layout>
  );
}
