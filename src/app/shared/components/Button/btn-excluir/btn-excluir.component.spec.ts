import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnExcluirComponent } from './btn-excluir.component';

describe('BtnExcluirComponent', () => {
  let component: BtnExcluirComponent;
  let fixture: ComponentFixture<BtnExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnExcluirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
