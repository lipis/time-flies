interface Props {
  n: number;
  d: number;
}

const Number = ({ n, d }: Props) => {
  const int = Math.floor(Math.abs(n));
  const dec = Math.abs(n) - int;

  const integer = int.toLocaleString();
  const decimal = dec.toFixed(d).slice(1);

  return (
    <div>
      <div className="flex">
        <div
          className="w-1/2 bg-blue-500 p-1 text-right"
          suppressHydrationWarning
        >
          {integer}
        </div>
        <div className="w-1/2 bg-green-500 p-1" suppressHydrationWarning>
          {decimal}
        </div>
      </div>
    </div>
  );
};

export default Number;
