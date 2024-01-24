import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.scss'

})
export class ProfileEditorComponent {
  #fb = inject(FormBuilder)
  profileForm = this.#fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.#fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });
  updateProfile() {
    this.profileForm.patchValue({
      firstName: '',
    });
  }

}




/*ProfileEditor permite gerenciar as instâncias de controle de formulário
   para os controles firstNamee lastName dentro da instância do grupo de formulários.*/
