import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-descriptions',
  templateUrl: './form-descriptions.component.html',
  styleUrls: ['./form-descriptions.component.css']
})
export class FormDescriptionsComponent implements OnInit {
  @Input() description: string | undefined = "";
  @Input() num_likes: number = 0;

  liked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLike() {
    if (this.liked) {
      this.liked = false;
      this.num_likes--;
    } else {
      this.liked = true;
      this.num_likes++;
    }
  }

}
