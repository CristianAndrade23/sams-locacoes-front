import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoSiteComponent } from './conteudo-site.component';

describe('ConteudoSiteComponent', () => {
  let component: ConteudoSiteComponent;
  let fixture: ComponentFixture<ConteudoSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
