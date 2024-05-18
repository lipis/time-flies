import { formatUTCDate, formatUTCTime } from "@/lib/utils";

interface Props {
  date: Date;
}

const UTCTime = ({ date }: Props) => {
  return (
    <h2>
      UTC: {formatUTCDate(date)} @ {formatUTCTime(date)}
    </h2>
  );
};

export default UTCTime;
