interface Props {
  d: number;
  label: string;
  n: number;
}

const Number = ({ n, label, d }: Props) => {
  const int = Math.floor(Math.abs(n));
  const dec = Math.abs(n) - int;

  const integer = int.toLocaleString();
  const decimal = dec.toFixed(d).slice(1);
  const opacity = int > 0 ? 1 : dec * 0.8 + 0.2;

  return (
    <div className="mt-3" style={{ opacity }}>
      <div className="text-center text-xs text-gray-400 ">{label}</div>
      <div className="flex text-2xl">
        <div className="w-1/2 text-right" suppressHydrationWarning>
          {integer}
        </div>
        <div
          className="w-1/2 text-gray-400 text-lg pt-1"
          suppressHydrationWarning
        >
          {decimal}
        </div>
      </div>
    </div>
  );
};

export default Number;
