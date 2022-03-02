import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intraction',
  templateUrl: './intraction.component.html',
  styleUrls: ['./intraction.component.css']
})
export class IntractionComponent implements OnInit {

  @Input() email!: string;
  @Output() Handler = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  eventHandler(e: any) {
    this.Handler.emit(e.target.checked);
  }

}
