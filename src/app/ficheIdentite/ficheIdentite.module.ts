import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { FicheIdentitePageRoutingModule } from "./ficheIdentite-routing.module";
import { FicheIdentitePage } from "./ficheIdentite.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicheIdentitePageRoutingModule
  ],
  declarations: [FicheIdentitePage]
})
export class FicheIdentitePageModule {}
