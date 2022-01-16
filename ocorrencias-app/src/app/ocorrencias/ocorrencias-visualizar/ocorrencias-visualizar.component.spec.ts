import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcorrenciasVisualizarComponent } from './ocorrencias-visualizar.component';

describe('OcorrenciasVisualizarComponent', () => {
  let component: OcorrenciasVisualizarComponent;
  let fixture: ComponentFixture<OcorrenciasVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcorrenciasVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcorrenciasVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
