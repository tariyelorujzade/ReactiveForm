import { NgModule }                          from "@angular/core";
import {MatInputModule}                      from '@angular/material/input';
import {MatFormFieldModule}                  from '@angular/material/form-field';
import {MatButtonModule}                     from '@angular/material/button';
import {MatSelectModule}                     from '@angular/material/select';





@NgModule({
    imports:[MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule],
    exports:[MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule],
})

export class MaterialModule{

}