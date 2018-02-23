import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../services/entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: Array<any>;

  constructor(private entriesservice: EntriesService) { }

  ngOnInit() {
    this.entriesservice.getList()
     .then((entries) => {
       this.entries = entries;
       }
     );
  }

}
