/**
 * Created by Administrator on 2017/3/12.
 */

import {Component, OnInit} from '@angular/core';
import {CommentService} from "../services/comment.service";

@Component({
  moduleId: module.id,
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls:['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public comments:Array<Comment>;
  constructor(public commentService:CommentService) {

  }

  ngOnInit() {

  }
}
