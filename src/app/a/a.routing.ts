import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent } from './a.component';

const routes: Routes = [
    { path: '', component: AComponent },
];


export const routedComponents = RouterModule.forChild(routes);