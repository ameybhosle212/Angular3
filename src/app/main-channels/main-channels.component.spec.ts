import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChannelsComponent } from './main-channels.component';

describe('MainChannelsComponent', () => {
  let component: MainChannelsComponent;
  let fixture: ComponentFixture<MainChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainChannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
