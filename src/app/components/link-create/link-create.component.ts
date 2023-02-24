import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HelpCenterLinkService} from "../../services/help-center-link.service";
import {HelpCenter} from "../../../helpCenter";

@Component({
  selector: 'app-link-create',
  templateUrl: './link-create.component.html',
  styleUrls: ['./link-create.component.css']
})
export class LinkCreateComponent implements OnInit{
  centers: HelpCenter[] = [];
  constructor(private helpCenterLinkService: HelpCenterLinkService) {
  }
  centerForm = new FormGroup({
    title: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
    tags: new FormControl(''),
  })

  get title(){
    return this.centerForm.get('title')
  }
  get link(){
    return this.centerForm.get('link')
  }
  get tags(){
    return this.centerForm.get('tags')
  }

  onSubmit(){
    console.log(this.centerForm.value);
    let helpCenter = this.centerForm.value;
    if(helpCenter.title == '' && helpCenter.link == ''){
      return;
    }
    this.helpCenterLinkService.addCenter(<HelpCenter>helpCenter).subscribe(
      helpCenter => {
        this.centers.push(helpCenter);
      })

  }
  getCenters(){
    this.helpCenterLinkService.getLinks().subscribe(
      centers => this.centers = centers
    )
  }
  ngOnInit(): void {
  this.getCenters();
  }
}
