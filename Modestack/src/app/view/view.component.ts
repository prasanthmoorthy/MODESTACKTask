import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Modestack } from '../_services/model/modestack';
import { AccountService } from '../_services/service/account.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  objModestack: Modestack = {} as any;
  identity: number = 0;

  constructor(
    private aroute: ActivatedRoute,
    private AccountService: AccountService,
  ) { }

  ngOnInit() {
    this.aroute.paramMap.subscribe(params => {
      this.identity = +params.get('id');
      if (this.identity > 0) {
        this.AccountService.Getview(this.identity)
          .subscribe(
            (data: Modestack) => {
              this.objModestack = data;
            },
            (err: any) =>
              console.log(err)
          );
      }
    });
  }

}
