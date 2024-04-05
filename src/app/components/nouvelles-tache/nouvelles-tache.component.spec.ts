import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellesTacheComponent } from './nouvelles-tache.component';

describe('NouvellesTacheComponent', () => {
  let component: NouvellesTacheComponent;
  let fixture: ComponentFixture<NouvellesTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvellesTacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvellesTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
