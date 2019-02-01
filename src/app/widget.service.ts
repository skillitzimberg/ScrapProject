import { Injectable } from '@angular/core';
import { Widget } from './widget.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class WidgetService {
  widgets: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase
  ) {
    this.widgets = database.list('widgets');
  }

  getWidgets() {
    return this.widgets;
  }

  addWidget(newWidget: Widget) {
    this.widgets.push(newWidget);
  }

  getWidgetById(widgetId: string) {
    return this.database.object('widgets/' + widgetId);
  }

  updateWidget(localUpdatedWidget) {
    let widgetEntryinFirebase = this.getWidgetById(localUpdatedWidget.$key);

    widgetEntryinFirebase.update({
      name: localUpdatedWidget.name,
      size: localUpdatedWidget.size,
      price: localUpdatedWidget.price,
      qty: localUpdatedWidget.qty
    });
  }

  deleteWidget(localUpdatedWidget) {
    let widgetEntryinFirebase = this.getWidgetById(localUpdatedWidget.$key);

    widgetEntryinFirebase.remove();
  }

}
