import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  validationCheck(formValue: any) {
    var web_name = formValue['name'];
    var web_age = formValue['age'];
    var web_fullName = formValue['fullName'];
    var web_firstName = web_fullName['firstname'];
    var web_lastName = web_fullName['lastname'];
    var obj = document.getElementById("warning");


    if (web_name == null || web_name == "") {
      // @ts-ignore
      // alert(obj.innerHTML);

      // @ts-ignore
      obj.innerHTML ="input error: name can not be blank";
      return false;
    } else {
      if (web_age == null || web_age == "" || web_age > 200 || web_age < 0) {
        // @ts-ignore
        // alert(obj.innerHTML);

        // @ts-ignore
        obj.innerHTML ="input error: age can not be blank and value should between 0 to 200";
        return false;
      } else {
        if (web_firstName == null || web_firstName == "") {
          // @ts-ignore
          // alert(obj.innerHTML);

          // @ts-ignore
          obj.innerHTML ="input error: firstname can not be blank";
          return false;
        } else {
          if (web_lastName == null || web_lastName == "") {
            // @ts-ignore
           // alert(obj.innerHTML);

            // @ts-ignore
            obj.innerHTML ="input error: lastname can not be blank";
            return false;
          }
          // @ts-ignore
          obj.innerHTML = "";
          console.log(formValue);
        }
      }
    }
  }
}
/*  onSubmit(formValue: any){
    console.log(formValue);
  }*/


