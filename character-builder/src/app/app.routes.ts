import { Routes } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';
import {RandomizerComponent} from './randomizer/randomizer.component';

export const routes: Routes = [
    { path: 'builder', component: BuilderComponent },
    { path: 'randomizer', component: RandomizerComponent },
    { path: '', redirectTo: '/builder', pathMatch: 'full' },
];
