import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarReceComponent } from './adicionar-rece.component';

describe('AdicionarReceComponent', () => {
  let component: AdicionarReceComponent;
  let fixture: ComponentFixture<AdicionarReceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarReceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarReceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
