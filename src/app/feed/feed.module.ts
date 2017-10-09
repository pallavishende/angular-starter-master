import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FeedlistComponent } from './index';
import { FormWizardModule } from 'angular2-wizard';

@NgModule({
    declarations: [
        FeedlistComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        FormWizardModule
    ],
    exports: [
        FeedlistComponent
    ]
})
export class FeedModule {
}
