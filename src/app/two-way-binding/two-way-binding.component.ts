import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_models/product';
import { TestService } from '../_services/test.service';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor(private router: ActivatedRoute, private testService: TestService) { }
  fontSizePx = 16;
  isSpecial = true
  id!: string;
  products: Product[] = [];
  currentClasses: Record<string, boolean> = {};
  setCurrentClasses() {
    this.currentClasses = {
      special: this.isSpecial
    };
  }
  currentStyles: Record<string, string> = {};
  setCurrentStyles() {
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
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.getProducts();
  }

  getProducts() {
    this.testService.getProductsFromSingleStore(this.id)
    .subscribe(res => {
      this.products = [...res]
    })
  }

}
