import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from '../errors/component/errordialog/errordialog.component';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '../material/material.module';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Injectable()
export class ErrorDialogService {
    public isDialogOpen: Boolean = false;
    constructor(public dialog: MatDialog) { }
    openDialog(errorMessage): any {
        if (this.isDialogOpen) {
            return false;
        }
        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '300px',
            data: errorMessage
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('dialogo cerrado');
            this.isDialogOpen = false;
            let animal;
            animal = result;
        });
    }
}