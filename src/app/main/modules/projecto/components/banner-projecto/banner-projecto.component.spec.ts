import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProjectoComponent } from './banner-projecto.component';

describe('BannerProjectoComponent', () => {
  let component: BannerProjectoComponent;
  let fixture: ComponentFixture<BannerProjectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerProjectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerProjectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
