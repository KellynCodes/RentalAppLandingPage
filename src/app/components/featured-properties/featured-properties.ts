import { Component, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { PropertyService } from '../../services/property.service';
import type { Property } from '../../models/property.model';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent, RouterLink],
  template: `
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-5">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-primary-900 mb-4">
            Featured Properties
          </h2>
          <p class="text-lg text-gray-500 max-w-[600px] mx-auto">
            Explore our handpicked selection of premium rental properties
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <app-property-card
            *ngFor="let property of featuredProperties"
            [property]="property"
          >
          </app-property-card>
        </div>
        <div class="text-center">
          <a
            routerLink="/properties"
            class="inline-block bg-primary-800 text-white py-3 px-8 rounded font-semibold hover:bg-primary-900 transition-colors duration-300"
            >View All Properties</a
          >
        </div>
      </div>
    </section>
  `,
})
export class FeaturedPropertiesComponent implements OnInit {
  featuredProperties: Property[] = [];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getFeaturedProperties().subscribe((properties) => {
      this.featuredProperties = properties;
    });
  }
}
