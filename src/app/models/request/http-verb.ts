export class HttpVerb {
  // Public variables
  public get: 'get';
  public post: 'post';
  public put: 'put';
  public patch: 'patch';
  public delete: 'delete';
  public update: 'update';

  constructor() {
    this.post = 'post';
    this.get = 'get';
    this.put = 'put';
    this.patch = 'patch';
    this.delete = 'delete';
    this.update = 'update';
  }
}
