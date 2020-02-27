import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _selector: string = 'spinner';
  private _element: HTMLElement;
  constructor() { 
    this._element = document.getElementById(this._selector);
  }

  public show(): void {
    this._element.style['display'] = 'block';
  }

  public hide(delay: number = 0): void {
    setTimeout(() => {
      this._element.style['display'] = 'none';
    }, delay);
  }
}
