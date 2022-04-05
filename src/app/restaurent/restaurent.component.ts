import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent.modal';



@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css']
})
export class RestaurentComponent implements OnInit {
  formValue!: FormGroup
  restaurentModelObj: RestaurentData = new RestaurentData;
  allRestaurentData: any;
  showAdd!: boolean
  showbtn!: boolean

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Name: [''],
      Email: [''],
      Mobile: [''],
      Address: [''],
      Service: ['']
    })
    this.getAllData()
  }
  clickAddResto() {
    this.formValue.reset();
    this.showAdd = true;
    this.showbtn = false;
  }
  // Now Subscribing our data which is mapes via Services..
  addResto() {
    this.restaurentModelObj.Name = this.formValue.value.Name;
    this.restaurentModelObj.Email = this.formValue.value.Email;
    this.restaurentModelObj.Mobile = this.formValue.value.Mobile;
    this.restaurentModelObj.Address = this.formValue.value.Address;
    this.restaurentModelObj.Service = this.formValue.value.Service;

    this.api.postRestaurent(this.restaurentModelObj).subscribe(res => {
      console.log(res);
      alert("Restaurent Records Added Successfully");
      // clear fill form data
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset()
      this.getAllData();
    },
      err => {
        alert("Something went wrong")
      }
    )
  }
  // Get all Data
  getAllData() {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData = res;
    })
  }
  // delete records
  deleteResto(data: any) {
    this.api.deleteRestaurent(data.id).subscribe(res => {
      alert("Restaurent Records Deleted Successfully. ")
      this.getAllData();// Quick refresh Data.
    })
  }
  onEditResto(data: any) {
    this.showAdd = false;
    this.showbtn = true;
    // this.restaurentModelObj,this.restaurentModelObj.id
    this.restaurentModelObj.id = data.id;
    this.formValue.controls['Name'].setValue(data.Name);
    this.formValue.controls['Email'].setValue(data.Email);
    this.formValue.controls['Mobile'].setValue(data.Mobile);
    this.formValue.controls['Address'].setValue(data.Address);
    this.formValue.controls['Service'].setValue(data.Service);
  }
  updateResto() {
    this.restaurentModelObj.Name = this.formValue.value.Name;
    this.restaurentModelObj.Email = this.formValue.value.Email;
    this.restaurentModelObj.Mobile = this.formValue.value.Mobile;
    this.restaurentModelObj.Address = this.formValue.value.Address;
    this.restaurentModelObj.Service = this.formValue.value.Service;


    this.api.updateRestaurent(this.restaurentModelObj, this.restaurentModelObj.id).subscribe(res => {
      // console.log(res);
      alert("Restaurent Records Updated");
      // this.formValue.reset()
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset()
      this.getAllData();



    })
  }
}

  