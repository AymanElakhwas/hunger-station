import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { OrderBasket } from '../../interfaces/order-basket';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements AfterViewInit, OnDestroy {
    @ViewChild('cardInfo') cardInfo: ElementRef;
    @select('data') orderItemsObservable: Observable<OrderBasket>;
    card: any;
    cardHandler = this.onChange.bind(this);
    error: string;
    totalAmount: number;

    constructor(private cd: ChangeDetectorRef, private router: Router) {  }

    ngAfterViewInit() {
        this.card = elements.create('card');
        this.card.mount(this.cardInfo.nativeElement);

        this.card.addEventListener('change', this.cardHandler);
    }

    ngOnDestroy() {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
    }

    onChange({ error }) {
        if (error) {
            this.error = error.message;
        } else {
            this.error = null;
        }
        this.cd.detectChanges();
    }

    async onSubmit(form: NgForm) {
        const { token, error } = await stripe.createToken(this.card);

        if (error) {
            console.log('Something is wrong:', error);
        } else {
            console.log('Success!', token);
            this.router.navigate(['/orderdone']);
        }
    }
    ngOnInit() {
        this.orderItemsObservable.subscribe((orderBasket: OrderBasket) => {
            this.calculateSummaryPrices(orderBasket);
            this.totalAmount = orderBasket.total;
        });
    }

    calculateSummaryPrices(orderBasket: OrderBasket) {
        let subtotal = 0;
        let flag: boolean = false;
        for (let item of orderBasket.items) {
            subtotal += item.price;
            flag = true
        }
        if(flag){
            orderBasket.subtotal = subtotal;
            orderBasket.delivery = 10;
            orderBasket.total = orderBasket.subtotal + orderBasket.delivery;            
        }else{
            this.router.navigate(['/restaurants']);
        }        
    }
}