import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-primary-900 mb-4">
              About Our Properties
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              Premium Rental Properties for Discerning Tenants
            </p>
            <p class="text-gray-600 mb-5 leading-relaxed">
              Welcome to RentalHomes, where we specialize in connecting tenants
              with exceptional rental properties. Our portfolio includes a
              diverse range of meticulously maintained apartments, houses, and
              commercial spaces in the most desirable locations.
            </p>
            <p class="text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in the real estate market, we
              understand the importance of finding a place that truly feels like
              home. Our dedicated team is committed to providing personalized
              service and ensuring a seamless rental experience from start to
              finish.
            </p>
            <div class="space-y-5">
              <div class="flex gap-4">
                <div
                  class="w-12 h-12 rounded-full bg-primary-800/10 flex items-center justify-center flex-shrink-0 text-primary-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 22h-2"></path>
                    <path d="M20 15v2h-2"></path>
                    <path d="M4 15v2h2"></path>
                    <path d="M4 22h2"></path>
                    <path
                      d="M12 2a8 8 0 0 0-8 8v12h16V10a8 8 0 0 0-8-8z"
                    ></path>
                    <path d="M9 15v2"></path>
                    <path d="M15 15v2"></path>
                    <path d="M12 15v6"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-primary-900 mb-1">
                    Premium Locations
                  </h3>
                  <p class="text-gray-600 text-sm">
                    All our properties are situated in prime locations with
                    excellent amenities nearby.
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div
                  class="w-12 h-12 rounded-full bg-primary-800/10 flex items-center justify-center flex-shrink-0 text-primary-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"
                    ></path>
                    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
                    <path d="M4 15v-3a6 6 0 0 1 6-6h0"></path>
                    <path d="M14 6h0a6 6 0 0 1 6 6v3"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-primary-900 mb-1">
                    Quality Assurance
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Every property undergoes rigorous quality checks to ensure
                    the highest standards.
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <div
                  class="w-12 h-12 rounded-full bg-primary-800/10 flex items-center justify-center flex-shrink-0 text-primary-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m14.5 9-5 5"></path>
                    <path d="m9.5 9 5 5"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-primary-900 mb-1">
                    Secure Transactions
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Our transparent rental process ensures security and peace of
                    mind for all parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Luxury apartment interior"
              class="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {}
