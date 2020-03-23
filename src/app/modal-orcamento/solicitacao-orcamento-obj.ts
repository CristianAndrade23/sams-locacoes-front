export class SolicitacaoOrcamentoObj {
  constructor(public empresa?: string,
              public evento?: string,
              public precisaDe?: number[],
              public precisaDeOutroText?: string,
              public nomeContato?: string,
              public emailContato?: string,
              public telefoneContato?: string,
              public celularContato?: string) {
    this.precisaDe = [];
  }
}
