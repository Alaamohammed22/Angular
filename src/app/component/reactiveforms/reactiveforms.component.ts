import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss'],
})
export class ReactiveformsComponent {
  // registrationform = new FormGroup({
  //   Username: new FormControl(''),
  //   Password: new FormControl(''),
  //   ConfirmPassword: new FormControl(''),
  //   Address: new FormGroup({
  //     PostalCode: new FormControl(''),
  //     State: new FormControl(''),
  //     City: new FormControl(''),
  //   }),
  // });

  registrationform = this.fb.group({
    Username: ['', [Validators.required, Validators.minLength(4)]],
    Password: [''],
    ConfirmPassword: [''],
    Address: this.fb.group({
      PostalCode: [''],
      State: [''],
      City: [''],
    }),
  });
  constructor(private fb: FormBuilder) {}
  loadData() {
    this.registrationform.patchValue({
      Username: 'FCI',
      Address: {
        State: 'Egypt',
        City: 'Assuit',
        PostalCode: '23456',
      },
    });
  }
  get Username() {
    return this.registrationform.get('Username');
  }
}
