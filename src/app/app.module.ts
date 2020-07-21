import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { AppComponent } from "./app.component";

import { AngularFireModule } from "@angular/fire/";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from "../environments/environment";

import {
  MDBSpinningPreloader,
  MDBBootstrapModulesPro,
  ToastModule,
} from "ng-uikit-pro-standard";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./pages/about/about.component";
import { AccountComponent } from "./pages/account/account.component";
import { CandlesComponent } from "./pages/candles/candles.component";
import { CardCollectionsComponent } from "./pages/card-collections/card-collections.component";
import { CartComponent } from "./pages/cart/cart.component";
import { CeramicsComponent } from "./pages/ceramics/ceramics.component";
import { ClayJewelryComponent } from "./pages/clay-jewelry/clay-jewelry.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CustomerServiceComponent } from "./pages/customer-service/customer-service.component";
import { FullCollectionComponent } from "./pages/full-collection/full-collection.component";
import { HomeComponent } from "./pages/home/home.component";
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component";
import { TermsAndConditionsComponent } from "./pages/terms-and-conditions/terms-and-conditions.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccountComponent,
    CandlesComponent,
    CardCollectionsComponent,
    CartComponent,
    CeramicsComponent,
    ClayJewelryComponent,
    ContactComponent,
    CustomerServiceComponent,
    FullCollectionComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: "Your_api_key",
    }),
    AppRoutingModule,
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
