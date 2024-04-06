import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorideComponent } from './coride.component';

describe('CorideComponent', () => {
  let component: CorideComponent;
  let fixture: ComponentFixture<CorideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
