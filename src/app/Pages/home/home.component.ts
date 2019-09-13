import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  public dateValue: Date = new Date();
  @ViewChild('ejDatePicker') ejDatePicker: DatePickerComponent;
  @ViewChild('file') file: any;
  public loginForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      file: ['', Validators.required],
      startDate: ''
    });
  }

  add() {
    $.confirm({
      title: 'Confirm!',
      content: 'Simple confirm!',
      boxWidth: '30%',
      useBootstrap: false,
      buttons: {
        UploadFile: () => {
          this.file.nativeElement.click();
        },
        cancel: () => {
          console.log('cancel');
        }
      }
    });
  }

  inputFile(val: any) {
    console.log('val', val);
  }

  changeDate() {
    console.log(this.ejDatePicker.value);
  }
}
