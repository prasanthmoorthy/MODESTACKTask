import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Modestack } from '../_services/model/modestack'
import { AccountService } from '../_services/service/account.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Newform: FormGroup;
  lst: Modestack[];
  obj: Modestack = {} as any;
  panelTitle: string;
  action: boolean;
  identity: number = 0;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private aroute: ActivatedRoute,
    private _AccountService: AccountService,
  ) { }

  formErrors = {

    'title': '',
    'body': '',


  };

  validationMessages = {

    'title': {
      'required': 'This field is required',
    },

    'body': {
      'required': 'This field is required.',
    },

  };

  logValidationErrors(group: FormGroup = this.Newform): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl && abstractControl.value && abstractControl.value.length > 0 && !abstractControl.value.replace(/^\s+|\s+$/gm, '').length) {
        abstractControl.setValue('');
      }
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

  ngOnInit(): void {


    this.aroute.paramMap.subscribe(params => {
      this.identity = +params.get('id');
      if (this.identity > 0) {
        this.panelTitle = "Edit Data";
        this.action = false;
        this._AccountService.Getlistbyid(this.identity)
          .subscribe(
            (data: Modestack) => {
              this.obj = data;  
 
              this.Newform.patchValue({
                userId:data.userId,
                title: data.title,
                body: data.body, 
              }); 
            },
            (err: any) => {
              //
              console.log(err);
            }
          );
      }
      else {
        this.action = true;
        this.panelTitle = "Add New Data";
      }
    });



    this.Newform = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }


  SaveData(): void {
    if (this.Newform.invalid) {
      return;
    }

    this.aroute.paramMap.subscribe(params => {
      this.identity = +params.get('id');
    });
    if (this.identity > 0) {
      this.Update();
    }
    else {
      this.Insert();
    }
  }

  Insert() {
    this.obj.title = this.Newform.controls['title'].value;
    this.obj.body = this.Newform.controls['body'].value;


    this._AccountService.Add(this.obj).subscribe(
      (data) => {
        if (data) {
          alert("Added Successfully");
          this._router.navigate(['/list']);
        }
        this.identity = 0;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  Update() {
    this.obj.id = this.identity;
    this.obj.title = this.Newform.controls['title'].value;
    this.obj.body = this.Newform.controls['body'].value;

    this._AccountService.Update(this.obj,this.identity).subscribe( 
      (data) => {
        if (data) {
          alert("Updated Successfully");
          this._router.navigate(['/list']);
        }
        this.identity = 0;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
