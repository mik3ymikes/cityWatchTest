import { User } from "./user";
import { Comment } from "./comment";

export class Alert {
id!:number;
content: string = '';
// start_date_time: string = '';
// end_date_time: string = '';
created_at: string = '';
user?:User;
title: string = '';
comments:Comment []=[]
// comments: Comment[]=[]
  // constructor(alert:any){
  //   this.id=alert.id || 0;
  //   this.content=alert.content || "";
  //   this.created_at=alert.created_at || "";
  //   this.user=alert.user || new User({});
  //   this.title=alert.title || ""
  // }

}


