import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorDetailsComponent } from './tresor-details.component';

describe('TresorDetailsComponent', () => {
  let component: TresorDetailsComponent;
  let fixture: ComponentFixture<TresorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TresorDetailsComponent]
    });
    fixture = TestBed.createComponent(TresorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
