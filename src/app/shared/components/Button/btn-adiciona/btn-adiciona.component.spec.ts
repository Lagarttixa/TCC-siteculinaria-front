import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAdicionaComponent } from './btn-adiciona.component';

describe('BtnAdicionaComponent', () => {
  let component: BtnAdicionaComponent;
  let fixture: ComponentFixture<BtnAdicionaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAdicionaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAdicionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
