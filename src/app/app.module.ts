import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AuthService } from "./auth.service";
import { FirelistComponent } from "./firelist/firelist.component";
import { RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBlTqB4mWbrxbzX4nJlNrhKimyMKoTcaEo",
      authDomain: "angularlist-3b9b5.firebaseapp.com",
      databaseURL: "https://angularlist-3b9b5.firebaseio.com",
      projectId: "angularlist-3b9b5",
      storageBucket: "angularlist-3b9b5.appspot.com",
      messagingSenderId: "540980371756",
      appId: "1:540980371756:web:fb9e7d29375c5cbacc4c89"
    }),
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "listagem", component: FirelistComponent }
    ]),
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FirelistComponent,
    IndexComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthService]
})
export class AppModule {}
