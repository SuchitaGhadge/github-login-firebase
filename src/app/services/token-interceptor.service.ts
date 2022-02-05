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
