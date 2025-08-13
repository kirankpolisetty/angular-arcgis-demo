import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arcgismap } from './arcgismap';

describe('Arcgismap', () => {
  let component: Arcgismap;
  let fixture: ComponentFixture<Arcgismap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arcgismap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arcgismap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
