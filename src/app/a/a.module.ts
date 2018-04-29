import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a.component';
import { AChildComponent } from './a-child/a-child.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        AComponent,
        AChildComponent
    ],
    declarations: [
        AComponent,
        AChildComponent
    ],
    providers: [],
})
export class AModule { }
