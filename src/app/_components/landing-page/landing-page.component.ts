import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../../_providers/blog-service/blog-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
  blogs: any;

  constructor(private _blogService: BlogServiceService) { }
  
  ngOnInit() {
    this._blogService.getClients().subscribe( response => {
      this.blogs = response;
    } );
  }

}
