// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from 'jest-extended';
expect.extend(matchers);
import { Cell } from '../core';

describe('Test constructor of class Cell.', function () {
  it('Should pass', function () {
    const newCell = new Cell(1, 2, [255, 0, 0]);
    expect(newCell.positionX).toBe(1);
    expect(newCell.positionX).toBe(2);
    expect(newCell.color).toBe([255, 0, 0]);
  });
});
