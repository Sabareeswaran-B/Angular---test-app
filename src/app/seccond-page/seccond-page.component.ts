import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-seccond-page',
  templateUrl: './seccond-page.component.html',
  styleUrls: ['./seccond-page.component.css']
})
export class SeccondPageComponent implements OnInit {


  @ViewChild(SignaturePad) signaturePad!: SignaturePad;

  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': window.innerWidth,
    'canvasHeight': 300,
    'backgroundColor': "whitesmoke",
  };

  image!:string;
  fontSizePx = 16;
  birthDay = new Date(1999, 10, 25);
  name = "";
  color = "whitesmoke";
  interns = ["Tamil", "Kaniskar", "Vishnu", "Sabareeswaran"];

  constructor() {
    // no-op
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  onClear() {
    this.signaturePad.clear();
  }

  onSignatureSubmit() {
    this.image = this.signaturePad.toDataURL();
  }

  ngOnInit(): void {
  }

}
