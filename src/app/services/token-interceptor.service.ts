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
