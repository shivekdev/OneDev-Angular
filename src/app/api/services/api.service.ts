/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation testGet
   */
  static readonly TestGetPath = '/test';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `testGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  testGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.TestGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `testGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  testGet(params?: {
  }): Observable<void> {

    return this.testGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postsGet
   */
  static readonly PostsGetPath = '/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Post>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Post>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsGet(params?: {
  }): Observable<Array<Post>> {

    return this.postsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Post>>) => r.body as Array<Post>)
    );
  }

  /**
   * Path part for operation postsPost
   */
  static readonly PostsPostPath = '/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsPost$Response(params?: {
    body?: Post
  }): Observable<StrictHttpResponse<Post>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Post>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsPost(params?: {
    body?: Post
  }): Observable<Post> {

    return this.postsPost$Response(params).pipe(
      map((r: StrictHttpResponse<Post>) => r.body as Post)
    );
  }

  /**
   * Path part for operation postsIdGet
   */
  static readonly PostsIdGetPath = '/posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsIdGet$Response(params: {

    /**
     * ID of pet to return
     */
    id: number;
  }): Observable<StrictHttpResponse<Post>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Post>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postsIdGet(params: {

    /**
     * ID of pet to return
     */
    id: number;
  }): Observable<Post> {

    return this.postsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Post>) => r.body as Post)
    );
  }

  /**
   * Path part for operation postsIdPut
   */
  static readonly PostsIdPutPath = '/posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postsIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsIdPut$Response(params: {

    /**
     * ID of pet to return
     */
    id: number;
    body?: Post
  }): Observable<StrictHttpResponse<Post>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Post>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postsIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postsIdPut(params: {

    /**
     * ID of pet to return
     */
    id: number;
    body?: Post
  }): Observable<Post> {

    return this.postsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<Post>) => r.body as Post)
    );
  }

}
