import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SuperHero } from 'src/app/core/interfaces/SuperHero';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';
import { SuperHeroStorageService } from '../../services/super-hero-storage.service';


@Component({
  selector: 'app-super-hero-home',
  templateUrl: './super-hero-home.component.html',
  styleUrls: ['./super-hero-home.component.scss']
})
export class SuperHeroHomeComponent implements OnInit {

  @Input() public hero:SuperHero;
  @Input() public allowAdd:boolean;


  constructor( private modalService: NgbModal,private superHeroStorageService:SuperHeroStorageService) { }


  async delete(id:string) {
    this.superHeroStorageService.removeSuperHero(id);
    const sh=await this.superHeroStorageService.getSuperHeros();
    this.superHeroStorageService.handlerSuperHero$.next(sh);
    const modalRef = this.modalService.open(ModalAlertComponent);
    modalRef.componentInstance.cuerpoMensaje = "El Super Héroe fue Eliminado correctamente";    
  }

  async checkOrientation(superhero:SuperHero) {
    const sh=await this.superHeroStorageService.getSuperHeros();
    if (superhero.biography.alignment=="bad"){
      let cant=(sh.filter(x=>x.biography.alignment=="bad")).length;      
      if (cant <3) return true;
    } else {      
      let cant=(sh.filter(x=>x.biography.alignment=="good")).length;        
      if (cant <3) return true;
    }    
    return false;

  }

  async add(superhero:SuperHero) {    
    if (this.superHeroStorageService.getlength()<6){
      if (await this.checkOrientation(superhero)===false) {

        const modalRef = this.modalService.open(ModalAlertComponent);
        modalRef.componentInstance.cuerpoMensaje = "No se pudo agregar";
        return false;
      }

      this.superHeroStorageService.addSuperHero(superhero);
      const sh=await this.superHeroStorageService.getSuperHeros();
      this.superHeroStorageService.handlerSuperHero$.next(sh);
      const modalRef = this.modalService.open(ModalAlertComponent);
      modalRef.componentInstance.cuerpoMensaje = "El Super Héroe fue agregado correctamente";
     
    } else {
      const modalRef = this.modalService.open(ModalAlertComponent);
      modalRef.componentInstance.cuerpoMensaje = "Cantidad de Super Héroes no permitida";      
    }
    
  }


  ngOnInit() {
    
    
   
  }

}
