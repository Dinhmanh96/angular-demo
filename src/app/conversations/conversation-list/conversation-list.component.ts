import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {
  list_conversation = [{id: 1, name: 'Room 1', place: '0969960196', time: '20/04/2018'},
    {id: 2, name: 'Room 2', place: '43 Nguyen Chi Thanh, Ha Noi', time: '20/04/2018'},
    {id: 3, name: 'Room 4', place: '16 Pham Hung, Tu Liem, Ha Noi', time: '20/04/2018'},
    {id: 4, name: 'Room 4', place: 'Toa nha Golden Place, Le Van Luong', time: '20/04/2018'},
    {id: 5, name: 'Room 5', place: 'Ho Tay, Ha Noi', time: '20/04/2018'},
    {id: 6, name: 'Room 6', place: 'Nha tu Quoc Gia, Ha Noi', time: '20/04/2018'},
    {id: 7, name: 'Room 7', place: 'San van dong My Dinh, Ha Noi', time: '20/04/2018'}
  ];
  constructor() { }

  ngOnInit() {
  }
  join(id){
    alert('Ban muon tham gian cuoc hoi thoai ' + id);
  }

  delete(id){
    alert('Ban muon xoa cuoc tro chuyen nay ' + id);
  }
}
