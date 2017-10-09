import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ContactlistComponent } from './index';
import { FormWizardModule } from 'angular2-wizard';

@NgModule({
    declarations: [
        ContactlistComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        FormWizardModule
    ],
    exports: [
        ContactlistComponent
    ]
})
export class ContactModule {
}
