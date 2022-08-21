import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './productcard.component.html',
  styleUrls: ['./header.component.css']
})

export class producardComponent implements OnInit{
   
    constructor() { }

    ngOnInit(): void {
    }
    public grandT:number=0;
    public item:any=[
          {
            id:Number(1),
            img:"https://bit.ly/3T57UIb",
             description:"Thumbs up",
            quantityCount:Number(0),
             totalCount:Number(0.00),
             price:Number(70.00)
         }
         ,
         {
            id:Number(2),
            img:"https://bit.ly/3c4GIJ7",
             description:"Cinthol Soap",
            quantityCount:Number(0),
             totalCount:Number(0.00),
             price:Number(34.00)
         },
         {
            id:Number(3),
            img:"https://bit.ly/3K8g91W",
             description:"Fresh Apples",
            quantityCount:Number(0),
             totalCount:Number(0.00),
             price:Number(30.00)
         }
         ,
         {
            id:Number(4),
            img:"https://bit.ly/3dM7tSY",
             description:"Ashiwad atat",
            quantityCount:Number(0),
             totalCount:Number(0.00),
             price:Number(390.00)
         }
    ]
  
    public getIncQuantity(i:number){
        console.log(this.grandT);
        console.log(this.item[i-1].price);
        this.item[i-1].quantityCount++;
      
       
    }
    public getDecQuantity(i:number){
        if(this.item[i-1].totalCount<=0)
        {
            window.alert("You can not take negative Quantity...");
            return;
        }
        this.item[i-1].quantityCount--;
       
    }
    public getTotalInc(i:number){
       
        this.item[i-1].totalCount=this.item[i-1].quantityCount*this.item[i-1].price;
        this.grandT=+this.item[i-1].totalCount;
    }
    public getTotalDec(i:number){
        
        this.item[i-1].totalCount=this.item[i-1].totalCount-this.item[i-1].price;
        this.grandT=-this.item[i-1].price;
    }

}