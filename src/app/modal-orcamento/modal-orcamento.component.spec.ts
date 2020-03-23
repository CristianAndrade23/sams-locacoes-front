import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrcamentoComponent } from './modal-orcamento.component';

describe('ModalOrcamentoComponent', () => {
  let component: ModalOrcamentoComponent;
  let fixture: ComponentFixture<ModalOrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOrcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
