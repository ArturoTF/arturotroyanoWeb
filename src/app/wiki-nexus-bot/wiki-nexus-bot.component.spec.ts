import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiNexusBotComponent } from './wiki-nexus-bot.component';

describe('WikiNexusBotComponent', () => {
  let component: WikiNexusBotComponent;
  let fixture: ComponentFixture<WikiNexusBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiNexusBotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WikiNexusBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
