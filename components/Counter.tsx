import LocalTime from "./LocalTime";
import Number from "./Number";
import UTCTime from "./UTCTime";

interface Props {
  date: Date;
  now: Date;
}

const Counter = ({ date, now }: Props) => {
  const start = date.getTime();
  const nowMS = now.getTime();

  const diff = nowMS - start;

  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;
  const years = days / 365.25;

  return (
    <div className="mt-4">
      <div className="text-center">
        <LocalTime date={date} />
        <UTCTime date={date} />
      </div>
      <hr className="border border-gray-700" />

      <Number n={seconds} d={2} label="seconds" />
      <Number n={minutes} d={3} label="minutes" />
      <Number n={hours} d={4} label="hours" />
      <Number n={days} d={5} label="days" />
      <Number n={weeks} d={6} label="weeks" />
      <Number n={months} d={7} label="months" />
      <Number n={years} d={8} label="years" />
    </div>
  );
};

export default Counter;
