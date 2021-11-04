import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }


numericOnly(event): boolean {
  let pattern = /^([0-9])$/;
  let result = pattern.test(event.key);
  return result;
}
}
