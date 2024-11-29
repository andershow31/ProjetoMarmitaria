import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component/header.component';
import { MarmitaComponent } from './marmita/marmita.component';
import { MarmitaListComponent } from './marmita/marmita-list/marmita-list.component';
import { MarmitaDetalhesComponent } from './marmita/marmita-detalhes/marmita-detalhes.component';
import { MarmitaItemComponent } from './marmita/marmita-list/marmita-item/marmita-item.component';
import { AlimentosListComponent } from './alimentos-list/alimentos-list.component';
import { AlimentosEditComponent } from './alimentos-list/alimentos-edit/alimentos-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MarmitaComponent,
    MarmitaListComponent,
    MarmitaDetalhesComponent,
    MarmitaItemComponent,
    AlimentosListComponent,
    AlimentosEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
