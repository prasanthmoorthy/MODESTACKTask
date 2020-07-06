import { Component, OnInit } from '@angular/core';
import { Modestack } from '../_services/model/modestack'
import { AccountService } from '../_services/service/account.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lst: Modestack[] = [] as any;
  selectedDeleteId: number;
  deleteColumn: string;
  constructor(
    private AccountService: AccountService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.lst = [] as any;
    this.onLoad();
  }

  confirmDeleteid(id: number) {
    this.selectedDeleteId = + id;
    alert("Are you sure want to delete this column"); 
    this.delete();
 
  }

  delete() {
    this.AccountService.delete(this.selectedDeleteId).subscribe(
      (data) => {
        if (data) { 
          alert('Deleted Successfully')
        } else {
          alert('Row Cant be deleted')
        } 

      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onLoad() {   
    this.AccountService.Getlist().subscribe(
      
      (data) => { 
        this.lst = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
