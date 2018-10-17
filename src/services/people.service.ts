import { Injectable } from "@angular/core";
import { Http, RequestOptions} from "@angular/http";
import "rxjs/Rx";
import {Observable} from 'rxjs/Observable';

// import { Headers} from "@angular/http/src/headers";
// import {RequestMethod} from "@angular/http/src/enums";
/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class PeopleService {
  headers: any;
  options: any;
  url: string = 'http://192.168.1.11/contact-api';

  constructor(private http: Http){
    this.headers = new Headers({
    'Content-Type': 'application/json',
    'Cache-Control':'no-cache'
  });
  this.options = new RequestOptions({headers:this.headers});
  }

  findAll(){
    return this.http.get(this.url+'/findall', this.options)
    .map(res=>res.json())
    .catch(this.handleError);
  }

  searchByName(searchItem){
    return this.http.post(this.url+'/search', searchItem, this.options)
    .map(res=>res.json())
    .catch(this.handleError);
  }

  removeById(id){
    return this.http.get(this.url+'/remove/'+id, this.options)
    .map(res=>res.json())
    .catch(this.handleError);
  }

  save(person){
    return this.http.post(this.url+'/save', person, this.options)
    .map(res=>res.json())
    .catch(this.handleError); 
  }

  update(person){
    return this.http.post(this.url+'/update', person, this.options)
    .map(res=>res.json())
    .catch(this.handleError); 
  }

  handleError(error){
    return Observable.throw(error.json().error || 'Server Error');
  }
} 