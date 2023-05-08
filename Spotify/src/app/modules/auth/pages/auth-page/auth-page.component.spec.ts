import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AuthPageComponent } from './auth-page.component';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ AuthPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('dberia ser creado', () => {
    expect(component).toBeTruthy();
  });
  it('deberia retornar invalido el formulario', () => {

    //TODO : ARRANGE

    const mockCredential = {
      email : '0x0x0x0x0x0',
      password: '11111111111111111111111111111'

    }
    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //TODO: ACT

    emailForm.setValue(mockCredential.email)
    passwordForm.setValue(mockCredential.password)

    expect(component.formLogin.invalid).toEqual(true);
  });
  it('el boton deberia tener la palabara iniciar sesion', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getinnerText = elementRef.nativeElement.innerText
    expect(getinnerText).toEqual('Iniciar sesión');
  });
});
