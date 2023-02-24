import {Component, OnInit} from '@angular/core';
import {HelpCenter} from "../../../helpCenter";
import {HelpCenterLinkService} from "../../services/help-center-link.service";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  centers: HelpCenter[] = [];


  constructor(private helpCenterLinkService: HelpCenterLinkService) {
  }
  ngOnInit(): void {
    this.getLinks();

  /*  this.helpCenters$ = this.searchTerm.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.helpCenterLinkService.searchCenter(term))
    )*/
  }
  searchClear(){
   this.getLinks();
  }
  getLinks():void{
    this.helpCenterLinkService.getLinks().subscribe(
      centers => this.centers = centers
    )
  }
  search(term:string): void{
   // this.searchTerm.next(term);
    this.helpCenterLinkService.searchCenter(term).subscribe(
      centers => this.centers = centers
    )
    console.log("search working");
  }

}
