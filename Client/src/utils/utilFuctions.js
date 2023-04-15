export function nextChar(str) {
  return String.fromCharCode(str.charCodeAt(0) + 1);
}

export const seatCharter = (row, column) => {
  const arr = [];
  let letter = 'A';
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      arr.push({
        row: i + 1,
        col: j + 1,
        seatNumber: letter + (j + 1),
        isAvailable: false,
        isBooked: false,
      });
    }
    letter = nextChar(letter);
  }
  return arr;
};
