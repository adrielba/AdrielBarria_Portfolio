import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSuperiorComponent } from './logo-superior.component';

describe('LogoSuperiorComponent', () => {
  let component: LogoSuperiorComponent;
  let fixture: ComponentFixture<LogoSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoSuperiorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
