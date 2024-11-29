import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmitaDetalhesComponent } from './marmita-detalhes.component';

describe('MarmitaDetalhesComponent', () => {
  let component: MarmitaDetalhesComponent;
  let fixture: ComponentFixture<MarmitaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarmitaDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarmitaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
