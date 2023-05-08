import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import * as mockRaw from '../../../data/user.json'
import {of} from 'rxjs'
describe('AuthService', () => {
  let service: AuthService;
  let mockUser : any = (mockRaw as any).default;
  let httpClientSpy : {post: jasmine.Spy}
  beforeEach(() => {
    TestBed.configureTestingModule({
      //providers : [CookieService],
      imports : [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any)
    //service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //PRUEBA SEND CREDENTIAL
  it('DEBE RETORNAR CON UN OBJETO DATA Y TOKENSESSION', (done: DoneFn) => {

    const user : any  = mockUser.userOk

    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x'
    }
    httpClientSpy.post.and.returnValue(of(mockResponse))

    service.sendCredentials(user.email, user.password)
    .subscribe(response => {
      const getProperties = Object.keys(response)
      expect(getProperties).toContain('data')
      expect(getProperties).toContain('tokenSession')
      done()
    })
  })
  });
