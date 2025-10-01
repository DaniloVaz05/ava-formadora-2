import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
  IonButton,
  IonButtons,
  IonSpinner
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { refresh, mail, call, business, location, arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
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
    IonButton,
    IonButtons,
    IonSpinner
  ]
})
export class Tab3Page implements OnInit {
  usuarios: any[] = [];
  carregando: boolean = false;
  erro: string = '';

  constructor(private http: HttpClient) {
    // Registrar os ícones
    addIcons({ refresh, mail, call, business, location, arrowBack });
  }

  ngOnInit() {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.carregando = true;
    this.erro = '';
    
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    this.http.get<any[]>(url).subscribe({
      next: (dados) => {
        this.usuarios = dados;
        this.carregando = false;
      },
      error: (erro) => {
        this.erro = 'Erro ao carregar dados da API';
        this.carregando = false;
        console.error('Erro:', erro);
      }
    });
  }

  recarregar() {
    this.buscarUsuarios();
  }
}