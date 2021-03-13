import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { environment } from './environment';
//const platform = platformBrowserDynamic();
//platform.bootstrapModule(AppModule);
if (environment.production) {
    enableProdMode();
    if(window){
        window.console.log=function(){};
    }
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
