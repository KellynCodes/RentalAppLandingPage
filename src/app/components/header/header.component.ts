import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header
      [class]="
        scrolled
          ? 'fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-colors duration-300 py-5'
          : 'fixed top-0 left-0 w-full z-50 bg-transparent transition-colors duration-300 py-5'
      "
    >
      <div class="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <div class="text-2xl font-bold">
          <a routerLink="/" class="text-primary-800">RentalHomes</a>
        </div>
        <nav>
          <button
            class="md:hidden flex flex-col gap-1.5 p-1.5 bg-transparent border-0 cursor-pointer"
            (click)="toggleMenu()"
            aria-label="Toggle menu"
          >
            <span
              class="block w-6 h-0.5 bg-gray-800 transition-all duration-300"
            ></span>
            <span
              class="block w-6 h-0.5 bg-gray-800 transition-all duration-300"
            ></span>
            <span
              class="block w-6 h-0.5 bg-gray-800 transition-all duration-300"
            ></span>
          </button>
          <ul
            [class]="
              menuActive
                ? 'fixed top-20 left-0 w-full flex flex-col bg-white p-5 gap-5 shadow-md z-30 transform translate-y-0 transition-transform duration-300'
                : 'md:flex hidden md:flex-row md:gap-8 fixed md:static top-20 left-0 w-full flex-col bg-white md:bg-transparent p-5 md:p-0 gap-5 md:gap-8 shadow-md md:shadow-none z-30 transform -translate-y-full md:translate-y-0 transition-transform duration-300'
            "
          >
            <li>
              <a
                routerLink="/"
                routerLinkActive="text-primary-800"
                [routerLinkActiveOptions]="{ exact: true }"
                class="text-gray-800 font-medium hover:text-primary-800 transition-colors duration-300"
                >Home</a
              >
            </li>
            <li>
              <a
                routerLink="/properties"
                routerLinkActive="text-primary-800"
                class="text-gray-800 font-medium hover:text-primary-800 transition-colors duration-300"
                >Properties</a
              >
            </li>
            <li>
              <a
                routerLink="/contact"
                routerLinkActive="text-primary-800"
                class="text-gray-800 font-medium hover:text-primary-800 transition-colors duration-300"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  scrolled = false;
  menuActive = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
