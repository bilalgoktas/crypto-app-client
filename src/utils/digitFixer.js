const digitFixer = (number, decimal) => {
  return number.toLocaleString("de-DE", {
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  });
};

export default digitFixer;
