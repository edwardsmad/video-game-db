import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key' : '987c9214bemsh1a965fef804284ap15a09fjsn6ab51b6a60e7',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },

            setParams: {
                key: 'c9cb843559dc4e2ba7d5fd21dbda37ea',
            }
        });
        
        return next.handle(req);
    }
}