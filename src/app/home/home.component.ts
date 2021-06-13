import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../register.service";
import { FormGroup,FormControl } from "@angular/forms";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
result:any=[];
result4:any=[];
result5:any=[];
selectedValue:any;
selectedValue1:any;
newDate:any

  constructor(private register:RegisterService,public datepipe: DatePipe) { }

  formObj=new FormGroup({
    date:new FormControl('')
  })


  ngOnInit(): void {
    this.register.getData().subscribe(data=>
      {
        console.log(data)
        this.result=data.states;
      })



  }

  selectChangeHandler(event: any) {

    this.selectedValue = event.target.value;

    this.register.getByDistrict(this.selectedValue).subscribe(data=>
      {console.log(data)
      this.result4=data;
      })
  }

  selectChangeHandler1(event: any) {

    this.selectedValue1 = event.target.value;

   
  }
  
  onSubmit(){
    console.log(this.formObj.value);
    console.log(this.selectedValue1);
    // this.selectedValue1=this.result4.district_id;
    // console.log(this.selectedValue1);

    //change date format
    this.newDate=this.datepipe.transform(this.formObj.value.date,'dd-MM-yyyy')

    this.register.getVaccineByDistrict(this.selectedValue1,this.newDate).subscribe(data=>
      {
        console.log(data)
      this.result5=data;
      console.log(this.result5.sessions)
      })
  }

}
