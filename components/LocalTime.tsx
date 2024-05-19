import { formatLocalDate, formatLocalTime } from "@/lib/utils";

interface Props {
  date: Date;
}

const LocalTime = ({ date }: Props) => {
  return (
    <h2 className="text-2xl">
      {formatLocalDate(date)} @ {formatLocalTime(date)}
    </h2>
  );
};

export default LocalTime;
