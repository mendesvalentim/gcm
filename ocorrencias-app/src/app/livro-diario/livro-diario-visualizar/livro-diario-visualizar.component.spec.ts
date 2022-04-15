import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDiarioVisualizarComponent } from './livro-diario-visualizar.component';

describe('LivroDiarioVisualizarComponent', () => {
  let component: LivroDiarioVisualizarComponent;
  let fixture: ComponentFixture<LivroDiarioVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroDiarioVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroDiarioVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
