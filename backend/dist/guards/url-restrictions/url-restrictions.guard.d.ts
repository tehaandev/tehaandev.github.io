import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class UrlRestrictionsGuard implements CanActivate {
    private readonly allowedURL1;
    private readonly allowedURL2;
    canActivate(context: ExecutionContext): boolean;
}
