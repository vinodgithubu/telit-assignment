import { Component, ViewChild } from '@angular/core';
import { RecordModel } from '../../models/record';
import { RecordService } from '../../services/record.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RecordComponent } from '../record/record.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  headersList: string[] = [];
  recordsList: RecordModel[] = [];
  dataSource!: MatTableDataSource<RecordModel>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _recordService: RecordService,
    private dialog: MatDialog
  ) {
    this.headersList = this._recordService.getRecordHeaders();
    this.recordsList = this._recordService.getRecords();

    this.dataSource = new MatTableDataSource<RecordModel>(this.recordsList);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  openCardDialog(elem: any) {
    console.log('ele', elem['id']);
    const dialogRef = this.dialog.open(RecordComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: {
        record: elem,
        buttonText: {
          cancel: 'Close',
        },
      },
    });
  }
}
