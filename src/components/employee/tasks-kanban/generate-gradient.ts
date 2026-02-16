export const generateColumnStyle = (index: number, total: number) => {
  const shiftedIndex = index + 1;
  const intensity = 100 - (shiftedIndex / (total - 1)) * 50;
  return { backgroundColor: `hsla(280, 52%, ${intensity}%, 30%)` };
};
