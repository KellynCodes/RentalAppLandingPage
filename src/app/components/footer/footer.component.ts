import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-primary-900 text-white py-16 pb-5">
      <div class="max-w-7xl mx-auto px-5">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3
              class="text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary-400"
            >
              RentalHomes
            </h3>
            <p class="text-gray-200 mb-2.5">
              Finding your perfect rental property has never been easier. Browse
              our selection of premium properties.
            </p>
          </div>
          <div>
            <h3
              class="text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary-400"
            >
              Quick Links
            </h3>
            <ul class="space-y-2.5">
              <li>
                <a
                  routerLink="/"
                  class="text-gray-200 hover:text-primary-400 transition-colors duration-300"
                  >Home</a
                >
              </li>
              <li>
                <a
                  routerLink="/properties"
                  class="text-gray-200 hover:text-primary-400 transition-colors duration-300"
                  >Properties</a
                >
              </li>
              <li>
                <a
                  routerLink="/contact"
                  class="text-gray-200 hover:text-primary-400 transition-colors duration-300"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h3
              class="text-lg font-semibold mb-5 pb-2.5 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-primary-400"
            >
              Contact Info
            </h3>
            <p class="text-gray-200 mb-2.5">123 Property Street</p>
            <p class="text-gray-200 mb-2.5">Real Estate City, RE 12345</p>
            <p class="text-gray-200 mb-2.5">Phone: (123) 456-7890</p>
            <p class="text-gray-200 mb-2.5">Email: info@rentalhomes.com</p>
          </div>
        </div>
        <div class="text-center pt-5 border-t border-gray-700">
          <p>
            &copy; ${new Date().getFullYear()} RentalHomes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
