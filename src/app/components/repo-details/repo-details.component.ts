import { Component, OnInit } from '@angular/core';
import { RepoService } from '../../shared/app-services/repo.service';
@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {

  constructor(public repoService:RepoService) {}

  ngOnInit() {
    this.repoService.getAllCommits().subscribe(getCommintList=>{
      console.log(getCommintList)
    })
  }

}
