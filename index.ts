export function castle(board: string[][]) {
  const capturedPieces: string[] = [];
  const rowArray = board.find((row: string[]) => row.includes('C'));
  const columnPosition = rowArray?.indexOf('C') as number;
  for (const square of (rowArray as string[])) {
    if(square === 'C') continue;
    if(square !== '_') capturedPieces.push(square);
  };
  for(const row of board) {
    const square = row[columnPosition]
    if(square === 'C') continue;
    if(square !== '_') capturedPieces.push(square);
  }
  return capturedPieces.length? capturedPieces : false;
};

export const add = (a: number, b: number): number => {
  return a + b;
};

// export default { add, castle}