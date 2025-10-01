import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { person, cloudDownload } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon
  ]
})
export class Tab1Page {
  nomeApp: string = 'Avaliação Mobile';
  nomeProfessor: string = 'Charles Bastos';
  semestre: string = '2/2025';
  
  constructor() {
    // Registrar os ícones que vamos usar
    addIcons({ person, cloudDownload });
  }
  
  navegarPara(rota: string) {
    console.log('Navegando para:', rota);
  }
}