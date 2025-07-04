import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskitem } from './taskitem';

describe('Taskitem', () => {
  let component: Taskitem;
  let fixture: ComponentFixture<Taskitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taskitem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
