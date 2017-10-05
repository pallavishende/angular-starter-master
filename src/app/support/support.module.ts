import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SupportlistComponent } from './index';

@NgModule({
    declarations: [
        SupportlistComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        SupportlistComponent
    ]
})
export class SupportlistModule {
}
