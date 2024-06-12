import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzFormItemComponent } from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { Validators as MyValidators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-menu-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormItemComponent,
    NzColDirective,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent,
    CommonModule,
  ],
  templateUrl: './menu-form.component.html',
  styleUrl: './menu-form.component.css',
})
export class MenuFormComponent implements OnInit {
  selectedBeanFlavor: any;

  validateForm: FormGroup<{
    name: FormControl<string>;
    description: FormControl<string>;
    items: FormControl<string>;
    price: FormControl<number>;
  }>;

  constructor(
    private fb: NonNullableFormBuilder,
    private apiService: ApiService,
    private notification: NzNotificationService
  ) {
    const { required } = MyValidators;
    this.validateForm = this.fb.group({
      name: ['', [required]],
      description: ['', [required]],
      items: ['', [required]],
      price: [0, [required]],
    });
  }
  ngOnInit() {}

  submitMenuForm(): void {
    if (this.validateForm.valid) {
      this.apiService.createCombo(this.validateForm.value).subscribe(() => {
        this.createNotification(
          'success',
          `${this.validateForm.value.name} ${this.validateForm.value.description}`,
          'The Bean Flavor has been created successfully!'
        );
        this.validateForm.reset();
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
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
