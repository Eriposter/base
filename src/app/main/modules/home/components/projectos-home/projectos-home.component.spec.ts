import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectosHomeComponent } from './projectos-home.component';

describe('ProjectosHomeComponent', () => {
  let component: ProjectosHomeComponent;
  let fixture: ComponentFixture<ProjectosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectosHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
