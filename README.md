# Castle

## introduction

In the game of chess, a castle can capture pieces either horizontally or vertically. It can move either left, right up or down until it runs into a piece which is can then capture. Below is a chess board represented by a nested array of strings. Any underscores `'_'` will represent an empty square and chess pieces will be represented by letters:

P = pawn
C = castle
K = knight
B = bishop
Q = queen

```js
  [
    ["_", "_", "_", "K", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "C", "_", "P", "B", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "Q", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"]
  ],
```

## Instructions

On this chessboard, the knight and the pawn are both available to be captured because they are on the same column and row as the castle respectively. The Queen isn't available because the castle can't move up, down or sideways to capture it. The bishop isn't available because the pawn is in the way.

This kata is based on the game chess. You will write a function `castle` that will take one argument which will be a chessboard (a nested array like the one shown above). The function should return an array of strings which will represent the pieces that are available to be captured depending on the position of the castle C. It doesn't matter which order the captured pieces are in in the returned array. If no pieces are available, the function should return false.

## Examples

```js
  [
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "C", "_", "Q", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"]
  ],
```
^ Here the Castle C can capture the queenQ because it is on the same row so the castle function should return `['Q']`

---

```js
  [
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "B", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "C", "_", "Q", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"]
  ],
```
^ Here there are two pieces the castle can capture: the queen and the bishop. In this case the castle function should return `['B', 'Q']` (it doesn't matter how the pieces are ordered in the array)
