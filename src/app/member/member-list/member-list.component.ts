import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  list_member = [{id: 1, name: 'Nguyen Dinh Manh', phone: '0969960196', email: 'dinhmanh96@gmail.com'},
          {id: 2, name: 'Nguyen Dinh Manh', phone: '0969960196', email: 'dinhmanh96@gmail.com'},
          {id: 3, name: 'Nguyen Dinh Manh', phone: '0969960196', email: 'dinhmanh96@gmail.com'},
          {id: 4, name: 'Nguyen Dinh Manh', phone: '0969960196', email: 'dinhmanh96@gmail.com'},
          {id: 5, name: 'Nguyen Dinh Manh', phone: '0969960196', email: 'dinhmanh96@gmail.com'},
          {id: 6, name: 'Nguyen Dinh Manh', phone: '0969960196', email: 'dinhmanh96@gmail.com'},
          {id: 7, name: 'Nguyen Dinh Manh', phone: '0969960196', email: 'dinhmanh96@gmail.com'},
          {id: 8, name: 'Nguyen Dinh Manh', phone: '0969960196', email: 'dinhmanh96@gmail.com'}
  ];
  constructor() { }
  ngOnInit() {
  }

  edit(id) {
    alert('Ban muon sua user ' + id);
  }

  delete(id) {
    alert('Ban muon xoa user ' + id);
  }
}
