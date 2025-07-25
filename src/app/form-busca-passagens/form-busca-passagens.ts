import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-form-busca-passagens',
  imports: [
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule, 
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './form-busca-passagens.html',
  styleUrl: './form-busca-passagens.scss'
})
export class FormBuscaPassagens {

}
