import { Component, VERSION } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular on Fire";

  email: string;
  senha: string;

  constructor(public authService: AuthService) {}

  loginWithEmail() {
    this.authService.loginWithEmail(this.email, this.senha);
    this.email = this.senha = "";
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
