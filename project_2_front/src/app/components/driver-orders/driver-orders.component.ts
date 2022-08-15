import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderStatus } from 'src/app/models/order-status';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-driver-orders',
  templateUrl: './driver-orders.component.html',
  styleUrls: ['./driver-orders.component.css']
})
export class DriverOrdersComponent implements OnInit {
  selectedOrder?: Order;

  ngOnInit(): void {
      this.getOrders();
  }

  public readyOrders : Order[] = [];
  constructor(private os : OrdersService) { }

  getOrders() {
    this.os.getOrdersByStatus(2).subscribe(
      (data: any) => {
        this.readyOrders = data.body;
        console.log("data: " + data.body)
          }
        );
      }
    
      takeOrder() {
    let orderStatus: OrderStatus;


    // I want to change the order status of a specific order ID
    // order.orderId
  }

  }

  
