import * as fs from 'fs';
import {parse} from '@tact-lang/compiler/dist/grammar/grammar';
import {join} from 'path';
import { translate } from '../../tactSmtTranslator';

describe('smoke', () => {
  test('test base translate function', () => {
    const contractPath = join(__dirname, 'testContract.tact');
    const src = fs.readFileSync(contractPath, 'utf-8');
    const ast = parse(src, contractPath, 'user');
    const res = translate(ast);
    expect(res.unwrap()).toStrictEqual({});
  });
});
