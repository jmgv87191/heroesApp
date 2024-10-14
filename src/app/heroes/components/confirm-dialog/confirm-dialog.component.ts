import { Component,inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose,MatButtonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {

  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  
  onConfirm():void{
    this.dialogRef.close(true);
  }

}
