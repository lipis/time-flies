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
  const years = days / 365;

  return (
    <div>
      <UTCTime date={date} />
      <LocalTime date={date} />

      <Number n={seconds} d={2} />
      <Number n={minutes} d={3} />
      <Number n={hours} d={4} />
      <Number n={days} d={5} />
      <Number n={weeks} d={6} />
      <Number n={months} d={7} />
      <Number n={years} d={8} />
    </div>
  );
};

export default Counter;
