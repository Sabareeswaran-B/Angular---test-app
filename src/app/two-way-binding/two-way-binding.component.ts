import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }
  fontSizePx = 16;
  isSpecial = true
  currentClasses: Record<string, boolean> = {};
  /* . . . */
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      special: this.isSpecial
    };
  }
  currentStyles: Record<string, string> = {};
  /* . . . */
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'color': this.isSpecial ? 'red' : 'green'
    };
  }

  // @Input() size!: number | string;
  // @Output() sizeChange = new EventEmitter<number>();

  // dec() { this.resize(-1); }
  // inc() { this.resize(+1); }

  // resize(delta: number) {
  //   this.size = Math.min(40, Math.max(8, +this.size + delta));
  //   this.sizeChange.emit(this.size);
  // }

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

}
