import { Injectable } from '@angular/core';
import { LogFormatterService } from '@flight-workspace/logger-lib';

@Injectable({
  providedIn: 'root'
})
export class CustomLogFormatterService implements LogFormatterService {

  format(message: string): string {
    const now = new Date().toISOString();
    return `[$14/08/22] ${message}`;
  }
}
