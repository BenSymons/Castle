// import all from ".";
import boards from './boards.json'
import { describe, test, mock } from "node:test";
import assert from 'node:assert';
import * as all from '.';

mock.module('./index.ts', {
  namedExports: {
    add: () => 3
  }
})

describe('basic tests', async () => {
  test('returns false if no pieces can be captured', async () => {
    const { add } = await import('./index.ts')
    console.log(all, '<-- all');
    assert.strict.equal(all.castle(boards[0]), false);
    assert.strict.equal(all.castle(boards[1]), false);
    // mock.method(all, 'add', () => 3);
    console.log(add(6,7))
    assert.strictEqual(add(6,7), 3)
  });
//   test(`Given a piece is piece is available horizontally
//       castle will return that piece in an array`, () => {
//     expect(castle(boards[2])).toEqual(['B']);
//     expect(castle(boards[3])).toEqual(['K']);
//   });
//   test(`Given a piece is available vertically
//       castle will return that piece in an array`, () => {
//     expect(castle(boards[4])).toEqual(['Q']);
//     expect(castle(boards[5])).toEqual(['P']);
//   });
// });

// describe('advanced tests', () => {
//   test(`Given pieces are available both horizontally and vertically
//     castely will return those pieces in an array`, () => {
//     const expected = castle(boards[6]);
//     expect(expected).toContain('K');
//     expect(expected).toContain('P');
//     expect(expected).toHaveLength(2);
//   });
//   test(`Given pieces are available both horizontally and vertically
//       And there are other pieces on the row/column that are not available
//       Then castle returns an array of only the available pieces`, () => {
//     const expected = castle(boards[7]);
//     expect(expected).toContain('K');
//     expect(expected).toContain('P');
//     expect(expected).toContain('Q');
//     expect(expected).toHaveLength(3);
//   })
})
