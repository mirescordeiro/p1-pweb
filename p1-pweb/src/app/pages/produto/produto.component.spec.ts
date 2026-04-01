import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutoComponent } from './produto.component';
import { CestaService } from '../../services';
import { GetProduto } from '../../mocks';
import { of } from 'rxjs';

describe('ProdutoComponent', () => {
  let component: ProdutoComponent;
  let fixture: ComponentFixture<ProdutoComponent>;
  const activeRouteStub = {
    paramMap: of({
      get: (key: string) => 'sap-01',
    }),
  };
  const cestaSpy = jasmine.createSpyObj('CestaService', ['adicionarItem']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activeRouteStub },
        { provide: CestaService, useValue: cestaSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o router e cesta ao adicionarNaCesta', () => {
    component.tamanhoSelecionado = 40;

    component.adicionarNaCesta(GetProduto);

    expect(cestaSpy.adicionarItem).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['cesta']);
  });
});
