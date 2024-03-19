import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from '@nestjs/common';

@Injectable()
export class UrlRestrictionsGuard implements CanActivate {
  private readonly allowedURL1 = /https:\/\/tehaan.me/;
  private readonly allowedURL2 = /https:\/\/tehaandev.github.io/;
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    let ok = false
    if (this.allowedURL1.test(req.url)) {
      ok = true
    } else if (this.allowedURL2.test(req.url)) {
      ok = true
    }
    return ok;
  }
}
