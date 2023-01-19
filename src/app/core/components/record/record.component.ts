import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent {
  record: object = {};
  cancelButtonText = 'Cancel';
  constructor(
    private _recordService: RecordService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<RecordComponent>
  ) {
    if (data) {
      if (data) {
        console.log('hhhh', data.record);
        this.record = data.record;
        this.openRecord(data.record.id);
      }
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    // this.dialogRef.updateSize('60vw', '50vw');
  }

  openRecord(id: string) {
    console.log(this._recordService.getRecordById(id));
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
