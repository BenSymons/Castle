import castle, { findCastle } from ".";
import boards from './boards.json'

describe('basic tests', () => {
  it('returns false if no pieces can be captured', () => {
    expect(castle(boards[0])).toBe(false);
    expect(castle(boards[1])).toBe(false);
  });
  it(`Given a piece is piece is available horizontally
      castle will return that piece in an array`, () => {
    expect(castle(boards[2])).toEqual(['B']);
    expect(castle(boards[3])).toEqual(['K']);
  });
  it(`Given a piece is available vertically
      castle will return that piece in an array`, () => {
    expect(castle(boards[4])).toEqual(['Q']);
    expect(castle(boards[5])).toEqual(['P']);
  });
});

describe('advanced tests', () => {
  it(`Given pieces are available both horizontally and vertically
    castely will return those pieces in an array`, () => {
    const expected = castle(boards[6]);
    expect(expected).toContain('K');
    expect(expected).toContain('P');
  });
  it(`Given pieces are available both horizontally and vertically
      And there are other pieces on the row/column that are not available
      Then castle returns an array of only the available pieces`, () => {
    const expected = castle(boards[7]);
    expect(expected).toContain('K');
    expect(expected).toContain('P');
    expect(expected).toContain('Q');
    expect(expected).toHaveLength(3);
  })
})

describe(findCastle.name, () => {
  it('should find the castle', () => {
    const result = findCastle(boards[0])
    expect(result).toEqual({ rowIndex: 3, columnIndex: 3 })
  })
})