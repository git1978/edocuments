import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxFooterComponent } from './xxx-footer.component';

describe('XxxFooterComponent', () => {
  let component: XxxFooterComponent;
  let fixture: ComponentFixture<XxxFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [XxxFooterComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(XxxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
