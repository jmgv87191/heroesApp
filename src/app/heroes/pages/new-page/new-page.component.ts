import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [MatDividerModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    MatButtonModule,MatIconModule,CommonModule, ReactiveFormsModule, HeroImagePipe,
    ConfirmDialogComponent
  ],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id:new FormControl<string>('',{ nonNullable:true }),
    superhero:new FormControl<string>(''),
    publisher:new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego:new FormControl(''),
    first_appearance:new FormControl(''),                                     
    characters:new FormControl(''),
    alt_img:new FormControl(''),
  });

  public publishers = [
    {
      id:'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  constructor( private heroService: HeroService,
      private aRoute:ActivatedRoute,
      private router:Router,
      private snackbar: MatSnackBar,
      private dialog: MatDialog
  ){}

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  
  get currentHero(): Hero{
    const hero = this.heroForm.value as Hero ;
    
    return hero;
  }
  
  ngOnInit(): void {

    if (!this.router.url.includes('edit'))return; 
    
    this.aRoute.params.pipe(

      switchMap(( {id} )=> this.heroService.getHeroById(id)),
    ).subscribe( hero =>{

      if (!hero) return this.router.navigateByUrl('/');

      this.heroForm.reset( hero );
      return;

    } )


  }
  onSubmit(){

    if ( this.heroForm.invalid ) return;

    if (this.currentHero.id) {
      this.heroService.updateHero( this.currentHero )

      .subscribe( hero => {

        this.showSnackbar( `${hero.superhero} updated!` )

      } )

      return;
    }

    this.heroService.addHero( this.currentHero ).subscribe(hero => {
      this.router.navigate(['/heroes/edit', hero.id])
      this.showSnackbar( `${hero.superhero} created!` )
    })


  }

  onDeleteHero(){

    if (!this.currentHero.id) throw Error ('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed().subscribe(result => {

      if (!result) return;

      this.heroService.deleteById( this.currentHero.id ).subscribe((data)=>{
        this.router.navigate(['/'])
      })

    });

  }



  showSnackbar( message: string ){
    this.snackbar.open(message, 'done',{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    })
  }




}
