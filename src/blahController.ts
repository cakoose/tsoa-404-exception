import { Route, Controller, Post, Query, Res, Path } from 'tsoa'

@Route('/')
export class BlahController extends Controller {
  @Post('{userId}/abc')
  public async f1(
    @Path() userId: string,
  ): Promise<string> {
    return 'blah';
  }
  @Post('{userId}/abcdef')
  public async f2(
    @Path() userId: string,
  ): Promise<string> {
    return 'blah';
  }
}

