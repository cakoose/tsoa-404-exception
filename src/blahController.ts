import { Route, Controller, Post, Query, Res, Body } from 'tsoa'

enum Color {
  red = 'red',
  blue = 'blue',
  green = 'green',
}

type T1 = {
  colors: Array<Color> | null;
};

@Route('/blah')
export class BlahController extends Controller {
  @Post('/f1')
  public async f1(
    @Body() arg: T1,
  ): Promise<string> {
    console.log('inside controller:', JSON.stringify(arg));
    return 'blah';
  }
}

