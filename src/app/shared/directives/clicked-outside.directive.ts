import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    constructor(private _elementRef: ElementRef) {
    }

    @Output()
    public clickedOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        // console.log(targetElement.id);
        if (!targetElement) {
            return;
        }

        let clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (targetElement && targetElement.id === 'profileMenu') {
            clickedInside = true;
        }
        if (!clickedInside) {
            this.clickedOutside.emit(event);
        }
    }
}
