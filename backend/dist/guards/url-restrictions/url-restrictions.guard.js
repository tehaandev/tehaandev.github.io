"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlRestrictionsGuard = void 0;
const common_1 = require("@nestjs/common");
let UrlRestrictionsGuard = class UrlRestrictionsGuard {
    constructor() {
        this.allowedURL1 = /https:\/\/tehaan.me/;
        this.allowedURL2 = /https:\/\/tehaandev.github.io/;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        let ok = false;
        if (this.allowedURL1.test(req.url)) {
            ok = true;
        }
        else if (this.allowedURL2.test(req.url)) {
            ok = true;
        }
        return ok;
    }
};
exports.UrlRestrictionsGuard = UrlRestrictionsGuard;
exports.UrlRestrictionsGuard = UrlRestrictionsGuard = __decorate([
    (0, common_1.Injectable)()
], UrlRestrictionsGuard);
//# sourceMappingURL=url-restrictions.guard.js.map