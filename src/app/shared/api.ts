import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly BASE_URL = "http://localhost:3000/posts";

  constructor(private _http: HttpClient) {
  }

  postRestaurant(data: any) {
    return this._http.post<any>(this.BASE_URL, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  getRestaurant() {
    return this._http.get<any>(this.BASE_URL)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  deleteRestaurant(id: number) {
    return this._http.delete<any>(this.BASE_URL + id)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
