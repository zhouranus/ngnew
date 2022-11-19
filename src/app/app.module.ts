import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { LcPersonComponent } from './demos/life-cycle/lc-person/lc-person.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing-module";
import { ChangeDetectionComponent } from './demos/change-detection/change-detection.component';
import { CdPersonComponent } from './demos/change-detection/cd-person/cd-person.component';
import { PersonDetailComponent } from './demos/change-detection/cd-person/person-detail/person-detail.component';
import { FormComponent } from './demos/form/form.component';
import { ReactiveComponent } from './demos/form/reactive/reactive.component';
import { ReactiveFbComponent } from './demos/form/reactive-fb/reactive-fb.component';
import { TemplateDrivenComponent } from './demos/form/template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DirectiveComponent } from './demos/directive/directive.component';
import { NgDirectiveComponent } from './demos/directive/ng-directive/ng-directive.component';
import { CustomDirectiveComponent } from './demos/directive/custom-directive/custom-directive.component';
import { ListItemComponent } from './demos/directive/ng-directive/list-item/list-item.component';
import { MyifDirective } from './demos/directive/custom-directive/myif.directive';
import { MyhiddenDirective } from './demos/directive/custom-directive/myhidden.directive';
import { PipeComponent } from './demos/pipe/pipe.component';
import { CurrencyExchangePipe } from './demos/pipe/currency-exchange.pipe';
import { MyfilterPipe } from './demos/pipe/myfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    LcPersonComponent,
    ChangeDetectionComponent,
    CdPersonComponent,
    PersonDetailComponent,
    FormComponent,
    ReactiveComponent,
    ReactiveFbComponent,
    TemplateDrivenComponent,
    DirectiveComponent,
    NgDirectiveComponent,
    CustomDirectiveComponent,
    ListItemComponent,
    MyifDirective,
    MyhiddenDirective,
    PipeComponent,
    CurrencyExchangePipe,
    MyfilterPipe
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
