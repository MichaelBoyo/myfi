export class Response {
  constructor(
    public status: boolean,
    public message: string,
    public data?,
    public err?,
  ) {}
}
