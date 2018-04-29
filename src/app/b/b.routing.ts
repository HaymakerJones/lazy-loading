import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BComponent } from './b.component';

const routes: Routes = [
    { path: '', component: BComponent },
];


export const routedComponents = RouterModule.forChild(routes);