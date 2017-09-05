import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesStylesComponent } from './templates-styles.component';

describe('TemplatesStylesComponent', () => {
  let component: TemplatesStylesComponent;
  let fixture: ComponentFixture<TemplatesStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
