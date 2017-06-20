import { Component , ElementRef} from '@angular/core';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {


  constructor(private _eRef: ElementRef){
    this._eRef=_eRef;
  }

  clickSearch=function(e:any){
    if(    this._eRef.nativeElement.classList.contains('active')){

    this._eRef.nativeElement.classList.remove('active');
    }else{

    this._eRef.nativeElement.classList.add('active');
    }
  }
 }
