import { Component, OnInit, effect } from '@angular/core';
import { Color, ModelCar } from '../../shared/moduls/model-car';
import { SharedService } from '../../shared/services/shared.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-select-modul-color',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './select-modul-color.component.html',
  styleUrl: './select-modul-color.component.scss'
})
export class SelectModulColorComponent implements OnInit{


  codeCar?:string;
  colorCar?:string;
  imgUrl?:string;

  cars:ModelCar[]=[];
  colorsModelSelected:Color[]=[];
  

  constructor(private sharedService:SharedService){

  }
  ngOnInit(): void {

    this.sharedService.getAllModelCars().subscribe( data =>{
      this.cars=data;
      this.getSelectedCarInfo();
    })
   }


   selectCar():void{

    this.colorsModelSelected=[];
    this.colorCar='';
    this.imgUrl='';

    const modelCar=this.cars.filter(item => item.code===this.codeCar)![0];

    this.sharedService.setSelectedCars(modelCar);

    this.colorsModelSelected=this.sharedService.colorsModelSelected();

   }

   selectColor():void{

    this.imgUrl=this.codeCar+"/"+this.colorCar;

    this.sharedService.setImage(this.imgUrl);

    this.sharedService.setSelectedColor(this.colorsModelSelected.filter(item => item.code==this.colorCar)[0]);


   }


    getSelectedCarInfo():void{

      this.colorsModelSelected=this.sharedService.colorsModelSelected();
      this.codeCar=this.sharedService.carsSelected()?.code;
      this.colorCar=this.sharedService.colorCarSelected()?.code;
      this.imgUrl=this.sharedService.imgUrl();
    }

}
