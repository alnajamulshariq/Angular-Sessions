import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelOptComponent } from './sel-opt.component';

describe('SelOptComponent', () => {
  let component: SelOptComponent;
  let fixture: ComponentFixture<SelOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelOptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
