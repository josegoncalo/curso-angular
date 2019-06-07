import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirEmailComponent } from './exibir-email.component';

describe('ExibirEmailComponent', () => {
  let component: ExibirEmailComponent;
  let fixture: ComponentFixture<ExibirEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
