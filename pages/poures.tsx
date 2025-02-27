import Birthdays from "@/components/Birthdays";
import Layout from "@/components/Layout";

const poures = [
  { name: "itsouk", date: "1983-09-14", utc: "12:00" },
  { name: "guru", date: "1979-09-04", utc: "12:00" },
  { name: "kellis", date: "1982-11-15", utc: "04:00" },
  { name: "lef", date: "1980-01-31", utc: "04:00" },
  { name: "kostakis", date: "1982-07-31", utc: "13:00" },
  { name: "lipis", date: "1982-07-08", utc: "10:00" },
  { name: "samanat", date: "1981-05-25", utc: "04:00" },
  { name: "rentzikas", date: "1987-05-18", utc: "10:00" },
  { name: "telis", date: "1982-11-27", utc: "11:30" },
  { name: "tim", date: "1982-11-11", utc: "09:00" },
  { name: "topless", date: "1982-12-13", utc: "14:20" },
  { name: "geo", date: "1982-10-13", utc: "11:00"},
  { name: "bakis", date: "1982-09-20", utc: "10:15"},
];

const kids = [
  { name: "alkioni", date: "2021-11-27", utc: "07:15" },
  { name: "anastasia", date: "2019-12-03", utc: "18:45" },
  { name: "athina", date: "2019-01-17", utc: "22:35" },
  { name: "dimitris", date: "2016-12-14", utc: "13:00" },
  { name: "dioni", date: "2024-05-14", utc: "12:49" },
  { name: "efi", date: "2023-12-28", utc: "16:01" },
  { name: "elpida", date: "2014-01-30", utc: "23:00" },
  { name: "konstantinos", date: "2015-07-12", utc: "02:45" },
  { name: "leonidas", date: "2022-06-03", utc: "23:12" },
  { name: "maria", date: "2012-01-08", utc: "15:53" },
  { name: "aggeliki", date: "2021-03-20", utc: "15:00"},
  { name: "michalis", date: "2012-01-08", utc: "15:59" },
  { name: "odysseus", date: "2023-02-07", utc: "22:15" },
  { name: "elisavet", date: "2024-05-28", utc: "20:10" },
  { name: "vivi", date: "2018-01-25", utc: "15:20" },
  { name: "orestis", date: "2014-09-03", utc: "23:00" }
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
        Click on the name to see it in your local time.
      </p>
      <p className="text-center text-gray-400 mt-4">
        <a href="https://github.com/lipis/time-flies/blob/main/pages/poures.tsx">
          Edit on GitHub
        </a>
      </p>
    </Layout>
  );
}
