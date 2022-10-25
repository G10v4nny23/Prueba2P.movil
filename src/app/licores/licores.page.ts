import { Component} from '@angular/core';
import { ApiService } from '../servicio/api.service';

@Component({
  selector: 'app-licores',
  templateUrl: './licores.page.html',
  styleUrls: ['./licores.page.scss'],
})
export class LicoresPage {
getdata:any[]=[];
  constructor( public _services: ApiService) {

    this._services.getdata<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata);
   }
    )
  }
}
