import {Component, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LifeCycleComponent} from "./demos/life-cycle/life-cycle.component";
import { ChangeDetectionComponent} from "./demos/change-detection/change-detection.component";
import {FormComponent} from "./demos/form/form.component";
import {DirectiveComponent} from "./demos/directive/directive.component";
import {PipeComponent} from "./demos/pipe/pipe.component";


const routes: Routes = [
  {
    path: 'lc',
    component: LifeCycleComponent
  },
  {
    path: 'cd',
    component: ChangeDetectionComponent
  },
  {
    path: 'f',
    component: FormComponent
  },
  {
    path: 'd',
    component: DirectiveComponent
  },
  {
    path: 'p',
    component: PipeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
