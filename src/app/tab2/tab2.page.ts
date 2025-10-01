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
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { school, barcode, location, time, calendar, arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton
  ]
})
export class Tab2Page {
  // Dados do aluno
  nomeCompleto: string = 'Danilo Fermiano Borges';
  turma: string = 'ADS - 2025.2';
  codigoTurma: string = '123456';
  unidade: string = 'Bangu';
  horario: string = '08:30h - 11:10h (Manhã)';
  periodo: string = '4º Semestre';
  foto: string = '../../assets/img/Danilo.jpeg';
  
  constructor() {
    // Registrar os ícones
    addIcons({ school, barcode, location, time, calendar, arrowBack });
  }
  
  editarInfo() {
    console.log('Editando informações do aluno');
  }
}