const pricesMin = [
  0,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  110,
  120,
  130,
  140,
  150,
  200,
  300,
  400,
  500,
  1000,
];

const optionMin = pricesMin.map((item, id) => {
  return (
    <option key={id} value={item}>
      {item}
    </option>
  );
});

const pricesMax = [
  "----",
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  110,
  120,
  130,
  140,
  150,
  200,
  300,
  400,
  500,
  1000,
  2000,
  5000,
  "----",
];

const optionMax = pricesMax.map((item, id) => {
  return (
    <option key={id} value={item}>
      {item}
    </option>
  );
});

export { optionMin, optionMax };
