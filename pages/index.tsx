import Counter from "@/components/Counter";
import { GetServerSideProps } from "next";
import { Noto_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const noto = Noto_Sans({ weight: "400", subsets: ["latin"] });

interface Props {
  date: Date;
  label: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { d, utc, l } = context.query;
  let date = new Date();

  if (d) {
    const timestamp = Date.parse(d as string);
    if (isNaN(timestamp) == false) {
      date = new Date(timestamp);
    }
  }

  if (utc) {
    const time = utc as string;
    const [hours, minutes] = time.split(":").map((n) => parseInt(n, 10));
    if (!isNaN(hours) && !isNaN(minutes)) {
      if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
        date.setUTCHours(hours);
        date.setUTCMinutes(minutes);
      }
    }
  }

  return {
    props: {
      date,
      label: l as string,
    },
  };
};

export default function Home({ date, label }: Props) {
  const [time, setTime] = useState(date);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 37);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${noto.className}`}>
      <main className="flex-grow">
        <header className="pt-4">
          <h1 className="text-center text-3xl">{label || "Time Flies"}</h1>
        </header>
        <Counter date={date} now={time} />
      </main>

      <footer className="border-t border-gray-700 text-center text-sm text-gray-500 p-4">
        <p>
          Made with ❤️ be Less is More |{" "}
          <a href="https://github.com/lipis/time-flies">Source Code</a>
        </p>
      </footer>
    </div>
  );
}
