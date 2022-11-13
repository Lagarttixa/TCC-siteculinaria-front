import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontoComponent } from './ponto.component';

describe('PontoComponent', () => {
  let component: PontoComponent;
  let fixture: ComponentFixture<PontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PontoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
