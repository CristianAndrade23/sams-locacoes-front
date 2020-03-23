import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-conteudo-site',
  templateUrl: './conteudo-site.component.html',
  styleUrls: ['./conteudo-site.component.css']
})
export class ConteudoSiteComponent implements OnInit {

  modalRefOrcamento: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  abreModalOrcamento(modal) {
      this.modalRefOrcamento = this.modalService.show(modal);
  }
}
