/**
 * Created by Administrator on 2017/3/12.
 */

import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class CommentService {

  public commentListURL ="src/mock-data/comment-mock.json";

  constructor(public http:Http) {

  }

  public getCommentList(postId:number):Observable<Comment[]>{
    return this.http.get(this.commentListURL).map((res:Response)=>res.json());

  }
}
