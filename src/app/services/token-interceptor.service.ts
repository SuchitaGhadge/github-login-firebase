import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req:any, next:any) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization : 'Bearer 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'
      }
    })
    return next.handle(tokenizedReq)
}
}
