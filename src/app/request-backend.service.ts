import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestBackendService {
  url = 'http://[::1]:3000/';

  constructor(private http: HttpClient) {}

  getData(entidad: string, filter?: string): Observable<any> {
    if (filter) {
      // {"where": {"nombre": {"like": "p", "options": "i"}} }
      const where = { where: { nombre: { like: filter, options: 'i' } } };
      const params = new HttpParams().append('filter', JSON.stringify(where));
      const httpOptions = {
        // header
        params,
      };
      return this.http.get(this.url + entidad, httpOptions);
    } else {
      return this.http.get(this.url + entidad);
    }
  }

  updateData(entidad: string, key: string, data: string): Observable<any> {
    // const where = { where: { nombre: { like: filter, options: 'i' } } };
    // const params = new HttpParams().append('filter', JSON.stringify(where));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json;charset=utf-8',
      }),
      // params,
    };

    const urlEdit = this.url + entidad + '/' + key;
    return this.http.put(urlEdit, data, httpOptions);
  }

  addData(entidad: string, data: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json;charset=utf-8',
      }),
      // params,
    };

    const urlEdit = this.url + entidad;
    return this.http.post(urlEdit, data, httpOptions);
  }

  deleteData(entidad: string, code: string): Observable<any> {
    const urlDelete = this.url + entidad + '/' + code;
    return this.http.delete(urlDelete);
  }
}
