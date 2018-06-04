import {TokenService} from "../services/token.service";
import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the tokenService token from the service.
    const token = this.tokenService.getToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the tokenServiceorization.
    const tokenServiceReq = req.clone({
      headers: req.headers.set('Authorization', 'bearer ' + token)
    });

    // send cloned request with header to the next handler.
    return next.handle(tokenServiceReq);
  }
}
