import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BComponent } from './b.component';
import { BChildComponent } from './b-child/b-child.component';
import { routedComponents } from './b.routing';

@NgModule({
    imports: [
        CommonModule,
        routedComponents
    ],
    exports: [
        BComponent,
        BChildComponent
    ],
    declarations: [
        BComponent,
        BChildComponent
    ],
    providers: [],
})
export class BModule { }
