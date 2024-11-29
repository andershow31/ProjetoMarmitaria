import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmitaItemComponent } from './marmita-item.component';

describe('MarmitaItemComponent', () => {
  let component: MarmitaItemComponent;
  let fixture: ComponentFixture<MarmitaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarmitaItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarmitaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
