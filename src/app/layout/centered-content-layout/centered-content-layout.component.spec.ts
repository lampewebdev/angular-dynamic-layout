import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredContentLayoutComponent } from './centered-content-layout.component';

describe('CenteredContentLayoutComponent', () => {
  let component: CenteredContentLayoutComponent;
  let fixture: ComponentFixture<CenteredContentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CenteredContentLayoutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
