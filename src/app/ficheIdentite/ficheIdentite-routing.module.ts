import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FicheIdentitePage } from "./ficheIdentite.page";

const routes: Routes = [
  {
    path: "",
    component: FicheIdentitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FicheIdentitePageRoutingModule {}
