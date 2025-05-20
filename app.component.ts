import { Component, ElementRef, ViewChild } from '@angular/core';

interface Mensagem {
  autor: 'atendente' | 'usuario';
  texto: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensagens: Mensagem[] = [
    { autor: 'atendente', texto: 'Blabla blabla blabla' },
    { autor: 'atendente', texto: 'Blabla blabla blabla' },
    { autor: 'usuario', texto: 'Blabla blabla blabla' },
    { autor: 'usuario', texto: 'Blabla blabla blabla' }
  ];

  @ViewChild('inputMensagem') inputMensagem!: ElementRef;

  enviarMensagem() {
    const valor = this.inputMensagem.nativeElement.value.trim();
    if (valor) {
      this.mensagens.push({ autor: 'usuario', texto: valor });
      this.inputMensagem.nativeElement.value = '';
    }
  }
}
