import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="max-w-3xl mx-auto px-5">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-primary-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-gray-500">
            Find answers to common questions about our rental properties
          </p>
        </div>
        <div class="space-y-4">
          <div
            *ngFor="let faq of faqs; let i = index"
            class="bg-white rounded-lg shadow-sm overflow-hidden"
            [class.border-primary-800]="faq.isOpen"
          >
            <div
              class="p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors duration-300"
              (click)="toggleFaq(i)"
            >
              <h3 class="text-lg font-medium text-primary-900">
                {{ faq.question }}
              </h3>
              <span
                class="text-primary-800 transition-transform duration-300"
                [class.rotate-180]="faq.isOpen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </span>
            </div>
            <div
              class="overflow-hidden transition-all duration-300 max-h-0"
              [class.max-h-96]="faq.isOpen"
              [class.py-5]="faq.isOpen"
              [class.px-5]="faq.isOpen"
            >
              <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FaqSectionComponent {
  faqs: FAQ[] = [
    {
      question: 'What is the typical lease duration?',
      answer:
        'Our standard lease agreements are for 12 months, but we also offer flexible options including 6-month and 18-month leases depending on the property. Short-term rentals may be available for select properties.',
      isOpen: false,
    },
    {
      question: 'Are utilities included in the rent?',
      answer:
        'This varies by property. Some of our rentals include basic utilities like water and trash, while others require tenants to set up their own utility accounts. The specific details are always clearly outlined in the property listing and lease agreement.',
      isOpen: false,
    },
    {
      question: 'What is the application process?',
      answer:
        "Our application process involves completing an online form, providing proof of income and employment, authorizing a credit and background check, and paying an application fee. Once approved, you'll need to sign the lease agreement and pay the security deposit to secure the property.",
      isOpen: false,
    },
    {
      question: 'Is renters insurance required?',
      answer:
        'Yes, we require all tenants to maintain renters insurance throughout the duration of their lease. This protects your personal belongings and provides liability coverage. Proof of insurance must be provided before move-in.',
      isOpen: false,
    },
    {
      question: 'How do I schedule a property viewing?',
      answer:
        'You can schedule a viewing directly through our website by selecting your preferred date and time on the property listing page. Alternatively, you can contact our leasing office by phone or email to arrange a viewing with one of our agents.',
      isOpen: false,
    },
    {
      question: 'What is your pet policy?',
      answer:
        'Our pet policy varies by property. Many of our rentals are pet-friendly, but may have restrictions on size, breed, or number of pets allowed. Additional pet deposits and monthly pet rent may apply. Service animals are accommodated according to fair housing laws.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
