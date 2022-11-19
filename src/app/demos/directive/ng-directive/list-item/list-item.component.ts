import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
    //@ts-ignore
  person;

  @Input()
    //@ts-ignore
  index;

  constructor() { }

  ngOnInit(): void {
  }

}
