import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { CTDirective } from './ct.directive';
import { CTComponent } from './ct.component';
import { CTService } from './ct.service';
import { CTItem } from './ct-item';
import UserData from '../assets/userData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'gep';
  user = [
    {
      name: 'User1'
    },
    {
      name: 'User2'
    }
  ];
  cts: CTItem[];
  currentAdIndex = -1;
  @ViewChild(CTDirective) ctHost: CTDirective;
  interval: any;
  userList :any= UserData;
  checkBox=0; textbox=0;


  constructor(private ctService: CTService, private componentFactoryResolver: ComponentFactoryResolver){ }
  ngOnInit() {
    this.cts = this.ctService.getUser1();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent(i) {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.cts.length;
    let ctItem = this.cts[i];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ctItem.component);
    const viewContainerRef = this.ctHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CTComponent>componentRef.instance).data = ctItem.data;
  }
  
  userClick(data){
    this.loadComponent(data);
  }
}
