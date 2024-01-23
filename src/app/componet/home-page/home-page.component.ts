import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [ReactiveFormsModule]
})

export class HomePageComponent {
  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  updateEnviar() {
    this.name.setValue('');
  }

}
