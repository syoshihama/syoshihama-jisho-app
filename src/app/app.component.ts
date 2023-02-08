import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WordsService } from './service/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    public getJsonValue: any;
    public postJsonValue: any;
    // constructor(private wordsService: WordsService){}

    // ngOnInit(): void{

    // }

    constructor(private http: HttpClient){
      this.getMethod();
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    public getMethod(){
      this.http.get('http://localhost:8080/search/hello').subscribe((data) => {
        console.log(data);
        this.getJsonValue = data;
      });
    }
}
