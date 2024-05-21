import Birthdays from "@/components/Birthdays";
import Layout from "@/components/Layout";

const poures = [
  { name: "itsouk", date: "1983-09-14", utc: "12:00" },
  { name: "kellis", date: "1982-11-15", utc: "04:00" },
  { name: "kostakis", date: "1982-07-31", utc: "06:00" },
  { name: "lipis", date: "1982-07-08", utc: "10:00" },
  { name: "samanat", date: "1981-05-25", utc: "12:00" },
  { name: "telis", date: "1982-11-27", utc: "11:30" },
  { name: "tim", date: "1982-11-11", utc: "08:00" },
  { name: "topless", date: "1982-12-13", utc: "14:20" },
];

const kids = [
  { name: "alkioni", date: "2021-11-27", utc: "07:15" },
  { name: "anastasia", date: "2019-12-03", utc: "18:45" },
  { name: "athina", date: "2019-01-17", utc: "22:35" },
  { name: "dimitris", date: "2016-12-14", utc: "13:00" },
  { name: "dioni", date: "2024-05-14", utc: "12:49" },
  { name: "efi", date: "2023-12-28", utc: "16:01" },
  { name: "elpida", date: "2014-01-30", utc: "23:00" },
  //  { name: "konstantinos", date: "2023-02-07", utc: "12:00" },
  { name: "leonidas", date: "2022-06-03", utc: "23:12" },
  { name: "maria", date: "2012-01-08", utc: "15:53" },
  { name: "michalis", date: "2012-01-08", utc: "15:59" },
  { name: "odysseus", date: "2023-02-07", utc: "22:15" },
  //  { name: "vivi", date: "2012-01-08", utc: "12:00" },
];

export default function Poures() {
  return (
    <Layout>
      <h1 className="text-center text-3xl text-gray-300 mt-6">Poures Clan</h1>
      <Birthdays people={poures} />

      <h1 className="text-center text-3xl text-gray-300 mt-8">Kids</h1>
      <Birthdays people={kids} />

      <hr className="border-gray-600 mt-6" />

      <p className="text-gray-600 text-center mt-6">
        All the datetimes are in UTC
      </p>
      <p className="text-center text-gray-400">
        <a href="https://github.com/lipis/time-flies/blob/main/pages/poures.tsx">
          Edit on GitHub
        </a>
      </p>
    </Layout>
  );
}
