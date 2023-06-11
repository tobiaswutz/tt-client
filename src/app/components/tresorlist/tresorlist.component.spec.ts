import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorlistComponent } from './tresorlist.component';

describe('TresorlistComponent', () => {
  let component: TresorlistComponent;
  let fixture: ComponentFixture<TresorlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TresorlistComponent]
    });
    fixture = TestBed.createComponent(TresorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
