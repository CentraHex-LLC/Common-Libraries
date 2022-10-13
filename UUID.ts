import crypto from 'crypto';

export class UUID {
  private _value: string;

  public static fromString(value: string): UUID {
    return new UUID(value);
  }

  public static new() {
    return new UUID(crypto.randomUUID());
  }

  public unwrap() {
    return this._value;
  }

  private constructor(value: string) {
    this._value = value;
  }
}