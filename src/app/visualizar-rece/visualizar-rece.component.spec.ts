import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarReceComponent } from './visualizar-rece.component';

describe('VisualizarReceComponent', () => {
  let component: VisualizarReceComponent;
  let fixture: ComponentFixture<VisualizarReceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarReceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarReceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
