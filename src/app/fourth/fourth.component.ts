import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Widget } from '../widget.model';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
  providers: [ WidgetService ]
})
export class FourthComponent implements OnInit {
  widgets;

  constructor(
    private widgetService: WidgetService,
  ) { }

  ngOnInit() {
    this.widgetService.getWidgets().subscribe((dataFromWidgetService) => {
      this.widgets = dataFromWidgetService;
    });
  }

}
