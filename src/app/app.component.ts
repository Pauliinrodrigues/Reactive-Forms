import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './componet/home-page/home-page.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, ProfileEditorComponent],
  template: `
  <!--<router-outlet />-->
  <!-- <app-home-page /> -->
  <app-profile-editor/>`,
})
export class AppComponent {
  title = 'formulario-reactivo';
}
