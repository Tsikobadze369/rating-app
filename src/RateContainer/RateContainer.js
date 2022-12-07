import "./RateContainer.css";

export default function RateContainer({
  numbers,
  rate,
  selectedKey,
  submited,
}) {
  function click(key) {
    rate(key);
  }
  const submit = (e) => {
    submited(true);
  };
  return (
    <div className="containerForSumbitandRate">
      <div className="containerForRateNumbers">
        {numbers.map((item) => {
          return (
            <div
              onClick={(e) => click(item)}
              key={item}
              className={`oval ${selectedKey === item ? "active" : ""}`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <button onClick={submit} className="submit">
        SUBMIT
      </button>
    </div>
  );
}
