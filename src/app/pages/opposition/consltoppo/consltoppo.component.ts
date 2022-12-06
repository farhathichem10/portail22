import { Component, OnInit } from '@angular/core';
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { PersonnelService } from '../../Employe/personnel.service';
import { OppositionserviceService } from '../services/oppositionservice.service';

@Component({
  selector: 'app-consltoppo',
  templateUrl: './consltoppo.component.html',
  styleUrls: ['./consltoppo.component.scss'],
  
})
export class ConsltoppoComponent implements OnInit {
  [x: string]: any;
  idCessionPers:any={
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
  }
  list:any;
  data !: [];
  listPers:any;
  listlig:any[];

  typ_pret:any[];
  perso11 :any = {
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers}
  


  constructor(private serv :OppositionserviceService,public token:TokenStorage, private service:PersonnelService ) {

  
   }

  ngOnInit() {
    this.getpers()
 

    this.getCessionPerso()
 
    
  }
   anotherFunction(event: Event ) {
    throw new Error('Function not implemented.');
  }
   
  getCessionPerso(){
    this.serv.fetchCessionPers(this.idCessionPers).subscribe(
      
        data => {
          this.list =data;


          this.listPers=this.list.personnel; //list 1
          console.log("abdodddddddddddddddddd 1 :",this.listPers); 

          this.listlig=this.list.ligCession;//list 2
       //this.ligbult =this.list.ligBult
       console.log("abdodddddddddddddddddd 1 :",this.listlig); 



    
       
      },
      err => {
        console.log(err);
      }
      );

    }

    getpers(){

      this.service.getpersonnel(this.perso11).subscribe(
        data => {
          this.perso11 = data; console.log('exected' + data);
         this.adrpersbycodeandmat=this.perso11.adresses_personnel
         this.rens=this.perso11.rens_pers
          console.log("dddddddd"+this.perso.nom_pers)
        },
        err => {
          console.log(err);
        }
        );}


    
    
}
