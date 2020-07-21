import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { CardCollectionsComponent } from "./pages/card-collections/card-collections.component";
import { CeramicsComponent } from "./pages/ceramics/ceramics.component";
import { ClayJewelryComponent } from "./pages/clay-jewelry/clay-jewelry.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component";
import { TermsAndConditionsComponent } from "./pages/terms-and-conditions/terms-and-conditions.component";
import { FullCollectionComponent } from "./pages/full-collection/full-collection.component";
import { CustomerServiceComponent } from "./pages/customer-service/customer-service.component";
import { CandlesComponent } from "./pages/candles/candles.component";
import { AccountComponent } from "./pages/account/account.component";
import { CartComponent } from "./pages/cart/cart.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "card-collections", component: CardCollectionsComponent },
  { path: "ceramics", component: CeramicsComponent },
  { path: "clay-jewelry", component: ClayJewelryComponent },
  { path: "contact", component: ContactComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "terms-and-conditions", component: TermsAndConditionsComponent },
  { path: "full-collection", component: FullCollectionComponent },
  { path: "customer-service", component: CustomerServiceComponent },
  { path: "candles", component: CandlesComponent },
  { path: "account", component: AccountComponent },
  { path: "cart", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
