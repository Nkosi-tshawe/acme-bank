import { Injectable } from '@angular/core';
import { HttpVerb } from 'src/app/models/request/http-verb';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //Public variables
  public httpVerb = new HttpVerb();

  constructor(private http: HttpClient) {}

  public async apiCall(url: string, data: any, httpVerb: string): Promise<any> {
    let response;
    url = url.replace(/^\/+|\/+$/g, ''); // trim slashes
    await new Promise<void>((resolve, reject) => {
      if (httpVerb == this.httpVerb.get) {
        let params = new HttpParams();
        for (let key in data) {
          params = params.append(key, data[key]);
        }
        this.http[httpVerb](`${environment.apiUrl}${url}`).subscribe(
          (responseData) => {
            response = responseData;
            resolve();
          },
          (error) => {
            resolve();
          }
        );
      } else {
        this.http[httpVerb](`${environment.apiUrl}${url}`).subscribe(
          (responseData) => {
            response = responseData;
            resolve();
          },
          (error) => {
            resolve();
          }
        );
      }
    });

    // Check that result is OK
    if (response) {
      return response;
    }

    // Throw error returned from API
    const error = response.result ?? 'Unknown';
    alert(response.result);
    throw error;
  }
}
