export default function castle(board: string[][]) {
  const [i, j] = findCastle(board);

  const capturables = [
    // find captured pieces on same row as castle
    ...findCapturables(board[i]),

    // add captured pieces on same column as castle
    ...findCapturables(board.map((row) => row[j])),
  ];

  if (capturables.length === 0) {
    return false;
  }

  return capturables;
}

function findCastle(board: string[][]): [number, number] {
  let result: [number, number] = [0, 0];
  board.forEach((row, indexI) => {
    row.forEach((square, indexJ) => {
      if (square === 'C') {
        result = [indexI, indexJ];
      }
    });
  });

  return result;
}

/**
 * Find capturables i.e. first piece left or right of castle in a row or column
 */
function findCapturables(rowOrColumn: string[]) {
  const capturables = [];

  const pieces = rowOrColumn.filter((square) => square !== '_');

  const castlePosition = pieces.findIndex((p) => p === 'C');

  if (castlePosition > 0) {
    capturables.push(pieces[castlePosition - 1]);
  }

  if (castlePosition < pieces.length - 1) {
    capturables.push(pieces[castlePosition + 1]);
  }

  return capturables;
}
