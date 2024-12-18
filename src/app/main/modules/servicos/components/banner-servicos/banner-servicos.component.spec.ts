import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerServicosComponent } from './banner-servicos.component';

describe('BannerServicosComponent', () => {
  let component: BannerServicosComponent;
  let fixture: ComponentFixture<BannerServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerServicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
