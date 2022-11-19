import { Component, OnInit } from '@angular/core';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from "@angular/core";
import {Person} from '../../shared/models/person';

@Component({
  selector: 'app-lc-person',
  templateUrl: './lc-person.component.html',
  styleUrls: ['./lc-person.component.css']
})
export class LcPersonComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy{

    @Input()
    //@ts-ignore
    person: Person;


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(new Date() + '-ngOnChanges', changes);
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log(new Date() +'-ngDoCheck');
  }

  ngAfterContentInit() {
    console.log(new Date() + '-ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log(new Date() + '-ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log(new Date() + '-ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log(new Date() + '-ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log(new Date() + '-ngOnDestroy');
  }

}
