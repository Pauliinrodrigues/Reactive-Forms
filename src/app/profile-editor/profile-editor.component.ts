import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss'
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({})
  firstName = new FormGroup('');
  lastName = new FormGroup('');
  /*ProfileEditor permite gerenciar as instâncias de controle de formulário
   para os controles firstNamee lastName dentro da instância do grupo de formulários.*/


}
