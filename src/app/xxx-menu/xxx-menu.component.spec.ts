import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxMenuComponent } from './xxx-menu.component';

describe('XxxMenuComponent', () => {
  let component: XxxMenuComponent;
  let fixture: ComponentFixture<XxxMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [XxxMenuComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(XxxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
