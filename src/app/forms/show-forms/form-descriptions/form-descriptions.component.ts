import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-descriptions',
  templateUrl: './form-descriptions.component.html',
  styleUrls: ['./form-descriptions.component.css']
})
export class FormDescriptionsComponent implements OnInit {
  @Input() description: string | undefined = "";
  @Input() num_likes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
