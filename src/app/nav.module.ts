import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { AppComponent } from './app.component';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [
    provideImgixLoader("www.imgixloader.com")
    // {
    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => {
    //     return `https://example.com/images?src=${config.src}&width=${config.width}`;
    //   },
    // },
  ],
  bootstrap: []
})
export class AppModule { }