import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { FilterPresentationComponent } from '../mentor-list-presentation/filter-presentation/filter-presentation.component';

@Injectable()
export class MentorListPresenterService {

  private delete: Subject<number>;
  private delete$: Observable<number>;
  constructor(
    private overlay: Overlay
  ) {
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();
  }
  public onDelete(id: number) {
    this.delete.next(id)
  }
  openFormModel() {
    //config of overlay
    let config = new OverlayConfig();
    config.hasBackdrop = true
    config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(FilterPresentationComponent);
    const componentRef = overlayRef.attach(component);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    // componentRef.instance.cancel.subscribe(() => overlayRef.detach());

  }

}
