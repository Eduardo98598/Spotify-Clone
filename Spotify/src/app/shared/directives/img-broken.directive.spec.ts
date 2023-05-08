import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

//TODO : COMPONENTE DE PRUEBA

@Component({
  template : '<img class="testing-directive" appImgBroken [src] = "srckMock" >'
})

class TestComponent {
  public srckMock: any = null
}
describe('ImgBrokenDirective', () => {
  let component : TestComponent;
  let fixture: ComponentFixture<TestComponent>
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations : [
        TestComponent,
        ImgBrokenDirective
      ]
    })
    fixture  = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('necesito una prueba de imagen rota', () => {
    expect(component).toBeTruthy();
  });

  it('directiva deberia cmbiar a una default', (done: DoneFn) => {
     const beforeImgElement  = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
     const beforeImgSrc = beforeImgElement.src
    component.srckMock = undefined

    setTimeout(()=>{
      const afterImgElement  = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = beforeImgElement.src
      expect(afterImgSrc).toEqual('http://localhost:9876/assets/images/ImageBroken.png')
      done()
    },3000)

   
    });
});
