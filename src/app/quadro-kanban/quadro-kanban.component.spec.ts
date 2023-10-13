import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroKanbanComponent } from './quadro-kanban.component';

describe('QuadroKanbanComponent', () => {
  let component: QuadroKanbanComponent;
  let fixture: ComponentFixture<QuadroKanbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuadroKanbanComponent]
    });
    fixture = TestBed.createComponent(QuadroKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
