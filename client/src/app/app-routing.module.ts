import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppModule } from './app.module';

const routes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        AppModule,
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
