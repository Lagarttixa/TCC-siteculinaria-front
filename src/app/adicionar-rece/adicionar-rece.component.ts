import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { never, NEVER } from 'rxjs';

@Component({
  selector: 'app-adicionar-rece',
  templateUrl: './adicionar-rece.component.html',
  styleUrls: ['./adicionar-rece.component.css']
})
export class AdicionarReceComponent implements OnInit {


  name = 'Angular';

  productForm: FormGroup;
  product: FormGroup;
  produ: FormGroup;

  constructor(private fb:FormBuilder){


    this.productForm = this.fb.group({
      quantities: this.fb.array([]) ,
    });

    this.product = this.fb.group({
      quantities1: this.fb.array([]) ,
    });

    this.produ = this.fb.group({
      quantities2: this.fb.array([]) ,
    });

  }
  ngOnInit():void {

 }

 quantities() : FormArray {
  return this.productForm.get("quantities") as FormArray



}

newQuantity(): FormGroup {
  return this.fb.group({

  })
}

addQuantity() {
  this.quantities().push(this.newQuantity());
}

removeQuantity(i:number) {
  this.quantities().removeAt(i);
}



// teste

quantities1() : FormArray {
  return this.product.get("quantities1") as FormArray



}

newQuantity1(): FormGroup {
  return this.fb.group({

  })
}

addQuantity1() {
  this.quantities1().push(this.newQuantity1());
}

removeQuantity1(i:number) {
  this.quantities1().removeAt(i);
}



// teste

quantities2() : FormArray {
  return this.produ.get("quantities2") as FormArray



}

newQuantity2(): FormGroup {
  return this.fb.group({

  })
}

addQuantity2() {
  this.quantities2().push(this.newQuantity2());
}

removeQuantity2(i:number) {
  this.quantities2().removeAt(i);
}


}
