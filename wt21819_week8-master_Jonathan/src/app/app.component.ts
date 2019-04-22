import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  //untuk template driven
  public hide: boolean = true;
  public Faculties = ["Binus", "IBII", "Untar"];
  formModel = {
    nama: "",
    nim: 0,
    date:0,
    birthdate:0,
    phone:0,
    address:""
  };
  onChange(Faculty) {
    console.log(Faculty);
    this.hide = false;
  }

  //untuk reactive form
  myReactiveForm: FormGroup;

  form;

  ngOnInit() {
    console.log("initialize");

    this.myReactiveForm = new FormGroup({
      nama: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20),Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$')]),
      nim: new FormControl(null, [Validators.required, Validators.maxLength(8),Validators.pattern('^(?=.*[0-9])[0-9]+$')]),
      date: new FormControl(null, [Validators.required,Validators.pattern('(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}')]),
      birthdate: new FormControl(null, [Validators.required,Validators.pattern('MM/DD/YYYY')]),
      Faculties: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.maxLength(8),Validators.pattern('^(?=.*[0-9])[0-9]+$')]),
      email: new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      check: new FormControl(null, [Validators.requiredTrue])
    });

    this.myReactiveForm.valueChanges.subscribe(form => {
      this.form = form;
    });
  }

  get nama() {
    return this.myReactiveForm.get("nama");
  }

  get nim() {
    return this.myReactiveForm.get("nim");
  }
  get date() {
    return this.myReactiveForm.get("date");
  }
  get birthdate() {
    return this.myReactiveForm.get("birthdate");
  }

  get check() {
    return this.myReactiveForm.get("check");
  }
  get address() {
    return this.myReactiveForm.get("address");
  }
  get phone() {
    return this.myReactiveForm.get("phone");
  }
  get email() {
    return this.myReactiveForm.get("email");
  }

  //untuk template driven
  submit1() {
    console.log(this.formModel);
    alert("submitted!");
  }

  //untuk reactive form
  submit2() {
    alert("submitted!");
  }
}
