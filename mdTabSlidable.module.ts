import { NgModule } from '@angular/core';
import { MdTabsModule } from "@angular/material"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations:[],
    imports: [MdTabsModule, BrowserAnimationsModule],
    exports: [MdTabsModule, BrowserAnimationsModule]
})

export class MdTabsSlidableModule {}