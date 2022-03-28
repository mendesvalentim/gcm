import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro-diario/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroDiarioService {

  apiURL: string = environment.apiUrlBase + '/api/livrodiario';  

  constructor(private http: HttpClient) { }

  getLivroById(id: number) : Observable<Livro>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  salvar(livro: Livro): Observable<Livro>{
    return this.http.post<Livro>(`${this.apiURL}`, livro);     
  }  

  getAllLivros() : Observable<Livro[]> {   
    return this.http.get<Livro[]>(`${this.apiURL}`);
  }

  atualizar(livro: Livro): Observable<any>{
    return this.http.put<Livro>(`${this.apiURL}/${livro.id}`, livro);
  }  
}
