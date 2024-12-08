import {Either, right} from '@sweet-monads/either';
import {ErrorBase} from './errorBase';
import {AstModule} from '@tact-lang/compiler/dist/grammar/ast';

export interface Smt {}

export enum SmtTranslateErrorName {
  UnexpectedAst = 'UnexpectedAst',
}

export class SmtTranslateError extends ErrorBase<SmtTranslateErrorName> {}
export type SmtTranslateRes = Either<SmtTranslateError, Smt>;

export function translate(ast: AstModule): SmtTranslateRes {
  return right({});
}
