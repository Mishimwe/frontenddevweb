import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListeComponent } from './edit-list.component';

describe('EditListeComponent', () => {
  let component: EditListeComponent;
  let fixture: ComponentFixture<EditListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

