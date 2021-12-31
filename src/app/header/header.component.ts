import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../services/theme-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isDarkMode: boolean = true;
  constructor(private themeService: ThemeServiceService) {

  }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    const mode =  this.themeService.toggleTheme();
    this.isDarkMode = mode === "drak-mode";
    // console.log("mode: ", mode);
  }

}
