import { Route, Controller, Get, Query, Res, TsoaResponse } from 'tsoa'

@Route('/greeting')
export class GreetingsController extends Controller {
  @Get('/')
  public async greet(
    @Res() notFoundResponse: TsoaResponse<404, { reason: string }>,
    @Query() name?: string,
  ): Promise<string> {
    if (!name) {
      notFoundResponse(404, { reason: "We don't know you yet. Please provide a name" });
    }
    return `Hello, ${name}`;
  }
}
