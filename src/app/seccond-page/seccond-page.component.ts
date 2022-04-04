import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';
import { first, Observable } from 'rxjs';
import { Store } from '../_models/store';
import { Store as str } from '@ngrx/store';
import { TestService } from '../_services/test.service';
import { increment, decrement, reset } from '../NGRX/counter.action';
import { User } from '../_models/user';
import { login } from '../NGRX/login.action';

@Component({
  selector: 'app-seccond-page',
  templateUrl: './seccond-page.component.html',
  styleUrls: ['./seccond-page.component.scss']
})
export class SeccondPageComponent implements OnInit {


  @ViewChild(SignaturePad) signaturePad!: SignaturePad;

  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': window.innerWidth,
    'canvasHeight': 300,
    'backgroundColor': "whitesmoke",
  };
  stores!: Array<Store>;
  image!: string;
  fontSizePx = 16;
  birthDay = new Date(1999, 10, 25);
  name = "";
  color = "whitesmoke";
  count$: Observable<number>;
  login$: Observable<User>;
  userLogin!: User;

  constructor(private testService: TestService, private router: Router, private store: str<{ count: number, login: User }>) {
    // no-op
    this.count$ = store.select('count');
    this.login$ = store.select('login');
    this.login$.subscribe({
      next: (data) => {
        console.log(data);
        this.userLogin = data;
      }
    })
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
    // this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
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
    this.getStores();
  }

  storeTrackBy(index: number, store: Store): number {
    return store.storeId;
  }

  getStores() {
    this.stores = [];
    this.testService.getStores()
      .pipe(first())
      .subscribe(
        {
          next: store => {
            this.stores = [...store];
          },
          error: error => {
            console.log(error)
          }
        }
      )
  }

  onStoreClickHandler(storeId: number) {
    this.router.navigateByUrl(`third/${storeId}`);
  }

  // var swiper = new Swiper('.swiper-container', {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //   effect: 'fade',
  //   loop: true,
  //   speed: 300,
  //   mousewheel: {
  //     invert: false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     dynamicBullets: true
  //   },
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   }
  // });

}
