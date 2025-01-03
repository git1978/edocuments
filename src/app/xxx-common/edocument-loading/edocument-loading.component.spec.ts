import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdocumentLoadingComponent } from './edocument-loading.component';

describe('EdocumentLoadingComponent', () => {
  let component: EdocumentLoadingComponent;
  let fixture: ComponentFixture<EdocumentLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdocumentLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdocumentLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
