import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css'],
  providers: [ApiService]
})
export class MenuFormComponent {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private notification: NzNotificationService
  ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      items: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.apiService.createCombo(this.validateForm.value).subscribe(
        () => {
        this.createNotification('Exito', "¡Combo creado exitosamente!", "¡El combo ha sido creado exitosamente!");
        this.validateForm.reset();
        },
        (error) => {
          console.error('Error creating combo:', error);
          this.createNotification('error', 'Error al crear el combo', 'Ocurrió un error al crear el combo. Por favor, inténtelo de nuevo más tarde.');
        }
    );
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
 }


