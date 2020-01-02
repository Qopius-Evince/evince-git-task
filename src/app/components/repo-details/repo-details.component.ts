import { Component, OnInit } from '@angular/core';
import { RepoService } from '../../shared/app-services/repo.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {
  rowCommitData=Array(); // All commitdaat in the aary object
  constructor(public repoService:RepoService, private snakbar:MatSnackBar) {}

  //Init method to load first when the page is loaded
  ngOnInit() {
    //Service to call the method to get all the commits
    this.repoService.getAllCommits().subscribe(getCommintList=>{
      getCommintList.forEach(element => {
        this.rowCommitData.push({"shaid":element.sha,"message":element.commit.message,"date":element.commit.committer.date,"name":element.commit.committer.name})
      });
    }, err => {
      this.snakbar.open(err,"Close",{
      duration:4000
      })
    })
  }

}
