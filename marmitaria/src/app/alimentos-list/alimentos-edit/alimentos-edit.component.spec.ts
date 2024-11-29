import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentosEditComponent } from './alimentos-edit.component';

describe('AlimentosEditComponent', () => {
  let component: AlimentosEditComponent;
  let fixture: ComponentFixture<AlimentosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlimentosEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
