import Birthdays from "@/components/Birthdays";
import Layout from "@/components/Layout";

const poures = [
  { name: "Georgy", date: "1984-02-17", utc: "10:00" },
  { name: "Γιώργος", date: "1977-06-21", utc: "10:00" },
  { name: "Δημήτρης", date: "2016-12-14", utc: "13:00" },
  { name: "Ελπίδα", date: "2014-01-30", utc: "23:00" },
  { name: "Ναντέζντα", date: "1953-11-12", utc: "10:00" },
  { name: "Νένα", date: "1980-05-17", utc: "10:00" },
  { name: "Παναγιώτης", date: "1982-07-08", utc: "10:00" },
  { name: "Φετούλης", date: "1954-09-18", utc: "10:00" },
];

export default function Poures() {
  return (
    <Layout>
      <h1 className="text-center text-3xl text-gray-300 mt-6">Family</h1>
      <Birthdays people={poures} />

      <hr className="border-gray-600 mt-6" />

      <p className="text-gray-600 text-center mt-6">
        Πατήστε πάνω στο όνομα για να το δείτε στην τοπική σας ώρα.
      </p>
    </Layout>
  );
}
