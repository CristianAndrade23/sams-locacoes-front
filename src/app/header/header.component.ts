import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AnimatedScroll} from '../shared/animated-scroll';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollInicio() {
    return setTimeout(() => AnimatedScroll.scroll(0), 200);
  }

  scrollServicos() {
    return setTimeout(() => AnimatedScroll.scroll(400), 200);
  }

  // abreModalOrcamento(modalOrcamento) {
  //   this.modalRefOrcamento = this.modalService.show(modalOrcamento);
  // }
  //
  // fechaModal(evento) {
  //   if (evento) { this.modalRefOrcamento.hide(); }
  // }
}
