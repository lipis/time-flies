import { formatUTCDate, formatUTCTime } from "@/lib/utils";

interface Props {
  date: Date;
}

const UTCTime = ({ date }: Props) => {
  return (
    <h2 className="text-sm text-gray-600 mt-2 mb-4">
      UTC: {formatUTCDate(date)} @ {formatUTCTime(date)}
    </h2>
  );
};

export default UTCTime;
