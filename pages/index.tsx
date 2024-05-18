import Counter from "@/components/Counter";
import { GetServerSideProps } from "next";
import { Noto_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Noto_Sans({ weight: "400", subsets: ["latin"] });

interface Props {
  date: Date;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { d, t } = context.query;
  let date = new Date();

  if (d) {
    const timestamp = Date.parse(d as string);
    if (isNaN(timestamp) == false) {
      date = new Date(timestamp);
    }
  }

  if (t) {
    const time = t as string;
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
    },
  };
};

export default function Home({ date }: Props) {
  const [time, setTime] = useState(date);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 37);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Time Flies</h1>
      <div className="min-w-full">
        <Counter date={date} now={time} />
      </div>
    </main>
  );
}
