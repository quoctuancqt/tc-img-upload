import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgUploaderComponent } from './img-uploader.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ImgUploaderComponent
    ],
    exports: [
        ImgUploaderComponent
    ]
})
export class ImgUploaderModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ImgUploaderModule
        }
    }
}