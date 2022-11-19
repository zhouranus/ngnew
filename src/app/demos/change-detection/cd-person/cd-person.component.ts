import{
  AfterViewChecked,
  Component, DoCheck,
  Input,
  OnChanges,
  OnInit
} from "@angular/core";
import {ImPerson} from "../../shared/models/im-person";


@Component({
  selector: 'app-cd-person',
  templateUrl: './cd-person.component.html',
  styleUrls: ['./cd-person.component.css']
})
export class CdPersonComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {
  @Input()
    //@ts-ignore
  person: ImPerson;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log(new Date() + '- ngOnChanges in person-detail');
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in person-detail');
  }

  ngAfterViewChecked() {
    console.log(new Date() + '- ngAfterViewChecked in person-detail');
  }
}
