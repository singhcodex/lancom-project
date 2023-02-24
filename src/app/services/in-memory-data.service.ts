import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {HelpCenter} from "../../helpCenter";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
   const centers = [
     {id:1, title: "google", link: "https://www.google.de/", tags:["not here", "search me"]},
     {id:2, title: "youtube", link: "https://www.youtube.com/", tags:["learning", "videos", "funny videos"]},
     {id:3, title: "facebook", link: "https://www.facebook.com/", tags:["friendship", "social"]},
     {id:4, title: "Netflix", link: "https://www.netflix.com/de-en/", tags:["movies","series",]}
   ];
   return {centers};
  }
}
