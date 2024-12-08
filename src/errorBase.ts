export class ErrorBase<ErrorNameType extends string> extends Error {
  name: ErrorNameType;
  message: string;
  cause: any;

  constructor(name: ErrorNameType, message: string, cause: any = null) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}
