import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  loginUser = '';

  //ActivatedRoute
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loginUser = this.route.snapshot.params['name'];
  }
}
