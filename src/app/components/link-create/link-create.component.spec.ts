import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCreateComponent } from './link-create.component';

describe('LinkCreateComponent', () => {
  let component: LinkCreateComponent;
  let fixture: ComponentFixture<LinkCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
