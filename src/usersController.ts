import {
  Controller,
  Get,
  Path,
  Route,
  Res,
  TsoaResponse,
} from 'tsoa';

type SayHelloOk = string;
type SayHelloError = {error: 'idHasSpace'};

@Route('users')
export class UsersController extends Controller {
  @Get('{id}/sayHello')
  public async sayHello(
    @Path() id: string,
    @Res() error: TsoaResponse<409, SayHelloError>,
  ): Promise<SayHelloOk> {
    if (id.indexOf(' ') >= 0) {
      throw error(409, {error: 'idHasSpace'});
    }
    return `Hello, ${id}!`;
  }
}
