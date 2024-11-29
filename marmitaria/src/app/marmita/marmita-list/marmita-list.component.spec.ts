import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmitaListComponent } from './marmita-list.component';

describe('MarmitaListComponent', () => {
  let component: MarmitaListComponent;
  let fixture: ComponentFixture<MarmitaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarmitaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarmitaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
