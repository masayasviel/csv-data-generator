import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  openWarnToast(message: string): void {
    this.messageService.add({
      key: 'bc',
      severity: 'warn',
      summary: 'Warn',
      detail: message,
    });
  }
}
