import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProgectsComponent } from './latest-progects.component';

describe('LatestProgectsComponent', () => {
  let component: LatestProgectsComponent;
  let fixture: ComponentFixture<LatestProgectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestProgectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestProgectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
