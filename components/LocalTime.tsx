import { formatLocalDate, formatLocalTime } from "@/lib/utils";

interface Props {
  date: Date;
}

const LocalTime = ({ date }: Props) => {
  return (
    <h2>
      Local: {formatLocalDate(date)} @ {formatLocalTime(date)}
    </h2>
  );
};

export default LocalTime;
