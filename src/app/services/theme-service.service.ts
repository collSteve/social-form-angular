import { Injectable, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';

interface ThemeChangeEventResponse {
  theme: "drak-mode" | "light-mode"
}

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private theme_mode: "drak-mode" | "light-mode" = "drak-mode";
  private themeUpdateSubject: Subject<ThemeChangeEventResponse> = new Subject();

  constructor() { }

  toggleTheme() {
    this.theme_mode = (this.theme_mode === "drak-mode"? "light-mode":"drak-mode");

    if (this.theme_mode === "drak-mode") {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
    else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }

    this.themeUpdateSubject.next({theme: this.theme_mode});
    return this.theme_mode;
  }

}
