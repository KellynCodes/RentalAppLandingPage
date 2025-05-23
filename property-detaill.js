document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Get property ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("id");

  if (!propertyId) {
    // Redirect to properties page if no ID is provided
    window.location.href = "properties.html";
  } else {
    // Load property details
    loadPropertyDetails(propertyId);
  }

  // Contact Agent Modal
  const contactModal = document.getElementById("contact-modal");
  const closeContactModal = document.getElementById("close-contact-modal");
  const agentContactForm = document.getElementById("agent-contact-form");

  if (contactModal && closeContactModal && agentContactForm) {
    // Close modal
    closeContactModal.addEventListener("click", () => {
      contactModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });

    // Close modal when clicking outside
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.classList.add("hidden");
        document.body.style.overflow = "auto";
      }
    });

    // Handle form submission
    agentContactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Show success message (in a real app, this would send data to a server)
      alert("Your message has been sent! An agent will contact you shortly.");

      // Reset form and close modal
      agentContactForm.reset();
      contactModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }

  // Schedule Viewing Modal
  const scheduleModal = document.getElementById("schedule-modal");
  const closeScheduleModal = document.getElementById("close-schedule-modal");
  const scheduleViewingForm = document.getElementById("schedule-viewing-form");

  if (scheduleModal && closeScheduleModal && scheduleViewingForm) {
    // Close modal
    closeScheduleModal.addEventListener("click", () => {
      scheduleModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });

    // Close modal when clicking outside
    scheduleModal.addEventListener("click", (e) => {
      if (e.target === scheduleModal) {
        scheduleModal.classList.add("hidden");
        document.body.style.overflow = "auto";
      }
    });

    // Handle form submission
    scheduleViewingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get selected date and time
      const date = document.getElementById("schedule-date").value;
      const time = document.getElementById("schedule-time").value;

      // Show success message (in a real app, this would send data to a server)
      alert(
        `Your viewing has been scheduled for ${date} at ${time}. We'll confirm shortly!`
      );

      // Reset form and close modal
      scheduleViewingForm.reset();
      scheduleModal.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  }
});

// Function to load property details
function loadPropertyDetails(propertyId) {
  // Get property data
  const property = getPropertyDetails(propertyId);

  // Update page title
  document.title = `${property.title} - Prime Properties`;

  // Update breadcrumb
  const breadcrumb = document.getElementById("property-title-breadcrumb");
  if (breadcrumb) {
    breadcrumb.textContent = property.title;
  }

  // Populate property details
  const propertyContent = document.getElementById("property-detail-content");
  if (propertyContent) {
    propertyContent.innerHTML = `
        <!-- Property Header -->
        <div class="relative">
          <div class="h-96 overflow-hidden">
            <img src="${property.image}" alt="${
      property.title
    }" class="w-full h-full object-cover">
          </div>
          <div class="absolute top-4 left-4">
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">${
              property.status
            }</span>
          </div>
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h1 class="text-3xl font-bold text-white">${property.title}</h1>
            <p class="text-white text-xl mt-2"><i class="fas fa-map-marker-alt mr-2"></i>${
              property.location
            }</p>
          </div>
        </div>
        
        <!-- Property Overview -->
        <div class="p-6 md:p-8">
          <div class="flex flex-wrap items-center justify-between mb-8">
            <div class="mb-4 md:mb-0">
              <span class="text-3xl font-bold text-blue-600">$${
                property.price
              }/month</span>
              <span class="text-gray-500 ml-2">Available ${
                property.availableFrom
              }</span>
            </div>
            <div class="flex space-x-3">
              <button id="btn-contact-agent" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                Contact Agent
              </button>
              <button id="btn-schedule-viewing" class="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 px-6 rounded-lg transition duration-300">
                Schedule Viewing
              </button>
            </div>
          </div>
          
          <!-- Property Details -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Main Details -->
            <div class="md:col-span-2">
              <div class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Property Details</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div class="bg-gray-50 p-4 rounded-lg text-center">
                    <i class="fas fa-bed text-blue-600 text-xl mb-2"></i>
                    <p class="text-gray-800 font-medium">${
                      property.beds
                    } Bedrooms</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg text-center">
                    <i class="fas fa-bath text-blue-600 text-xl mb-2"></i>
                    <p class="text-gray-800 font-medium">${
                      property.baths
                    } Bathrooms</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg text-center">
                    <i class="fas fa-ruler-combined text-blue-600 text-xl mb-2"></i>
                    <p class="text-gray-800 font-medium">${
                      property.sqft
                    } sq ft</p>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg text-center">
                    <i class="fas fa-car text-blue-600 text-xl mb-2"></i>
                    <p class="text-gray-800 font-medium">${property.parking}</p>
                  </div>
                </div>
                
                <h3 class="text-xl font-bold text-gray-800 mb-3">Description</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">${
                  property.description
                }</p>
                
                <h3 class="text-xl font-bold text-gray-800 mb-3">Key Features</h3>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  ${property.features
                    .map(
                      (feature) => `
                    <li class="flex items-center"><i class="fas fa-check text-green-600 mr-2"></i>${feature}</li>
                  `
                    )
                    .join("")}
                </ul>
                
                <!-- Property Gallery -->
                <h3 class="text-xl font-bold text-gray-800 mb-3">Property Gallery</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                  ${property.gallery
                    .map(
                      (img) => `
                    <div class="aspect-square overflow-hidden rounded-lg">
                      <img src="${img}" alt="Property Image" class="w-full h-full object-cover hover:scale-110 transition duration-300 cursor-pointer">
                    </div>
                  `
                    )
                    .join("")}
                </div>
                
                <!-- Additional Details -->
                <h3 class="text-xl font-bold text-gray-800 mb-3">Additional Details</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p class="flex justify-between py-2 border-b">
                      <span class="text-gray-600">Property Type:</span>
                      <span class="font-medium">${property.propertyType}</span>
                    </p>
                    <p class="flex justify-between py-2 border-b">
                      <span class="text-gray-600">Year Built:</span>
                      <span class="font-medium">${property.yearBuilt}</span>
                    </p>
                    <p class="flex justify-between py-2 border-b">
                      <span class="text-gray-600">Lease Term:</span>
                      <span class="font-medium">${property.leaseTerm}</span>
                    </p>
                    <p class="flex justify-between py-2 border-b">
                      <span class="text-gray-600">Pet Policy:</span>
                      <span class="font-medium">${property.petPolicy}</span>
                    </p>
                  </div>
                  <div>
                    <p class="flex justify-between py-2 border-b">
                      <span class="text-gray-600">Utilities Included:</span>
                      <span class="font-medium">${
                        property.utilitiesIncluded
                      }</span>
                    </p>
                    <p class="flex justify-between py-2 border-b">
                      <span class="text-gray-600">Deposit:</span>
                      <span class="font-medium">$${property.deposit}</span>
                    </p>
                    <p class="flex justify-between py-2 border-b">
                      <span class="text-gray-600">Application Fee:</span>
                      <span class="font-medium">$${
                        property.applicationFee
                      }</span>
                    </p>
                    <p class="flex justify-between py-2 border-b">
                      <span class="text-gray-600">Available From:</span>
                      <span class="font-medium">${property.availableFrom}</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Location Section -->
              <div class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Location</h2>
                <div class="h-64 bg-gray-200 rounded-lg mb-4">
                  <!-- Replace with actual map embed -->
                  <div class="w-full h-full flex items-center justify-center">
                    <p class="text-gray-600">Map will be displayed here. Replace with your Google Maps embed code.</p>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-bold text-gray-800 mb-2">Nearby Schools</h4>
                    <ul class="space-y-1 text-gray-600">
                      ${property.nearbySchools
                        .map(
                          (school) => `
                        <li>${school}</li>
                      `
                        )
                        .join("")}
                    </ul>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-bold text-gray-800 mb-2">Public Transportation</h4>
                    <ul class="space-y-1 text-gray-600">
                      ${property.publicTransportation
                        .map(
                          (transport) => `
                        <li>${transport}</li>
                      `
                        )
                        .join("")}
                    </ul>
                  </div>
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 class="font-bold text-gray-800 mb-2">Nearby Amenities</h4>
                    <ul class="space-y-1 text-gray-600">
                      ${property.nearbyAmenities
                        .map(
                          (amenity) => `
                        <li>${amenity}</li>
                      `
                        )
                        .join("")}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Sidebar -->
            <div class="md:col-span-1">
              <!-- Agent Information -->
              <div class="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Property Agent</h3>
                <div class="flex items-center mb-4">
                  <img src="${property.agent.photo}" alt="${
      property.agent.name
    }" class="w-16 h-16 rounded-full object-cover mr-4">
                  <div>
                    <h4 class="font-bold text-gray-800">${
                      property.agent.name
                    }</h4>
                    <p class="text-gray-600">${property.agent.title}</p>
                  </div>
                </div>
                <div class="space-y-2 mb-4">
                  <p class="flex items-center text-gray-600">
                    <i class="fas fa-phone-alt text-blue-600 mr-2"></i>
                    ${property.agent.phone}
                  </p>
                  <p class="flex items-center text-gray-600">
                    <i class="fas fa-envelope text-blue-600 mr-2"></i>
                    ${property.agent.email}
                  </p>
                </div>
                <button id="btn-contact-agent-sidebar" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Contact Agent
                </button>
              </div>
              
              <!-- Request Information Form -->
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Request Information</h3>
                <form id="request-info-form" class="space-y-4">
                  <div>
                    <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  </div>
                  <div>
                    <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                  </div>
                  <div>
                    <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Send Request</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      `;

    // Load similar properties
    loadSimilarProperties(propertyId);

    // Set up event listeners for buttons
    setupEventListeners();
  }
}

// Function to load similar properties
function loadSimilarProperties(currentPropertyId) {
  const similarPropertiesContainer =
    document.getElementById("similar-properties");
  if (!similarPropertiesContainer) return;

  // Get all properties
  const allProperties = getAllProperties();

  // Filter out current property and get up to 3 similar ones
  const similarProperties = allProperties
    .filter((prop) => prop.id !== currentPropertyId)
    .slice(0, 3);

  // Render similar properties
  similarPropertiesContainer.innerHTML = similarProperties
    .map(
      (property) => `
      <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 border border-gray-200">
        <div class="relative">
          <img src="${property.image}" alt="${property.title}" class="w-full h-56 object-cover">
          <span class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">${property.status}</span>
        </div>
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-800">${property.title}</h3>
            <span class="text-blue-600 font-bold">$${property.price}/mo</span>
          </div>
          <p class="text-gray-500 mb-2"><i class="fas fa-map-marker-alt mr-2 text-blue-600"></i>${property.location}</p>
          <div class="flex justify-between text-gray-500 mb-4">
            <span><i class="fas fa-bed mr-2"></i>${property.beds} Beds</span>
            <span><i class="fas fa-bath mr-2"></i>${property.baths} Baths</span>
            <span><i class="fas fa-ruler-combined mr-2"></i>${property.sqft} sqft</span>
          </div>
          <a href="property-detail.html?id=${property.id}" class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">View Details</a>
        </div>
      </div>
    `
    )
    .join("");
}

// Function to set up event listeners for buttons
function setupEventListeners() {
  // Contact Agent buttons
  const contactAgentBtn = document.getElementById("btn-contact-agent");
  const contactAgentSidebarBtn = document.getElementById(
    "btn-contact-agent-sidebar"
  );
  const contactModal = document.getElementById("contact-modal");

  if (contactAgentBtn && contactModal) {
    contactAgentBtn.addEventListener("click", () => {
      contactModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }

  if (contactAgentSidebarBtn && contactModal) {
    contactAgentSidebarBtn.addEventListener("click", () => {
      contactModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }

  // Schedule Viewing button
  const scheduleViewingBtn = document.getElementById("btn-schedule-viewing");
  const scheduleModal = document.getElementById("schedule-modal");

  if (scheduleViewingBtn && scheduleModal) {
    scheduleViewingBtn.addEventListener("click", () => {
      scheduleModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }

  // Request Information form
  const requestInfoForm = document.getElementById("request-info-form");

  if (requestInfoForm) {
    requestInfoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your request has been submitted! We'll get back to you shortly.");
      requestInfoForm.reset();
    });
  }
}

// Function to get all properties (for similar properties section)
function getAllProperties() {
  return [
    {
      id: "prop1",
      title: "Luxury Apartment",
      location: "123 Downtown St, City Center",
      price: "1,200",
      beds: 2,
      baths: 2,
      sqft: 1200,
      status: "Available Now",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "prop2",
      title: "Family Home",
      location: "456 Suburban Ave, Quiet Hills",
      price: "2,500",
      beds: 4,
      baths: 3,
      sqft: 2400,
      status: "Available Now",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "prop3",
      title: "Studio Apartment",
      location: "789 Urban Blvd, Downtown",
      price: "850",
      beds: 1,
      baths: 1,
      sqft: 600,
      status: "Available Now",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "prop4",
      title: "Modern Condo",
      location: "101 Skyline Dr, High Rise District",
      price: "1,800",
      beds: 2,
      baths: 2,
      sqft: 1400,
      status: "New Listing",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "prop5",
      title: "Cozy Cottage",
      location: "222 Garden Lane, Greenville",
      price: "1,400",
      beds: 2,
      baths: 1,
      sqft: 900,
      status: "Available Now",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "prop6",
      title: "Luxury Villa",
      location: "333 Luxury Ave, Estates",
      price: "4,500",
      beds: 5,
      baths: 4.5,
      sqft: 4200,
      status: "Premium",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    },
  ];
}

// Function to get detailed property information
function getPropertyDetails(propertyId) {
  const properties = {
    prop1: {
      id: "prop1",
      title: "Luxury Apartment",
      location: "123 Downtown St, City Center",
      price: "1,200",
      beds: 2,
      baths: 2,
      sqft: 1200,
      parking: "1 Assigned Spot",
      status: "Available Now",
      availableFrom: "Immediately",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description:
        "This beautiful 2-bedroom apartment offers modern living in the heart of downtown. Featuring high ceilings, large windows with city views, and premium finishes throughout. The open concept kitchen includes stainless steel appliances and quartz countertops. The primary bedroom features a walk-in closet and en-suite bathroom with a glass shower. The second bedroom is perfect for a home office or guest room. Building amenities include a fitness center, rooftop terrace, and 24-hour concierge service. Located within walking distance to restaurants, shopping, and public transportation.",
      features: [
        "Central Air Conditioning",
        "In-unit Washer/Dryer",
        "Stainless Steel Appliances",
        "Hardwood Floors",
        "Walk-in Closets",
        "Fitness Center Access",
        "Rooftop Terrace",
        "24-hour Concierge",
        "Secure Building Access",
        "Elevator Access",
        "Pet-Friendly",
        "Bike Storage",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560185007-c5ca9d2c0862?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560449096-28b7a90924e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      ],
      propertyType: "Apartment",
      yearBuilt: "2018",
      leaseTerm: "12 months minimum",
      petPolicy: "Cats and dogs allowed (restrictions apply)",
      utilitiesIncluded: "Water, Trash",
      deposit: "1,200",
      applicationFee: "50",
      nearbySchools: [
        "Downtown Elementary (0.5 miles)",
        "City Center Middle School (1.2 miles)",
        "Metropolitan High School (1.8 miles)",
      ],
      publicTransportation: [
        "Bus Stop (0.1 miles)",
        "Subway Station (0.3 miles)",
        "Train Station (1.5 miles)",
      ],
      nearbyAmenities: [
        "Grocery Store (0.2 miles)",
        "Restaurants (0.1 miles)",
        "Shopping Mall (0.7 miles)",
        "Fitness Center (0.3 miles)",
        "Park (0.5 miles)",
      ],
      agent: {
        name: "Sarah Johnson",
        title: "Senior Property Manager",
        phone: "(123) 456-7890",
        email: "sarah@primeproperties.com",
        photo:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    },
    prop2: {
      id: "prop2",
      title: "Family Home",
      location: "456 Suburban Ave, Quiet Hills",
      price: "2,500",
      beds: 4,
      baths: 3,
      sqft: 2400,
      parking: "2-Car Garage",
      status: "Available Now",
      availableFrom: "June 1, 2023",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description:
        "Spacious 4-bedroom family home in a quiet suburban neighborhood. This recently renovated property features an open floor plan with a gourmet kitchen, formal dining room, and large family room with fireplace. The primary suite is located on the main floor and includes a walk-in closet and en-suite bathroom with a soaking tub and separate shower. Three additional bedrooms and two full bathrooms are located upstairs. The fenced backyard includes a covered patio perfect for entertaining and a large grassy area for children and pets. Located near top-rated schools, parks, and shopping centers.",
      features: [
        "Newly Renovated Kitchen",
        "Fireplace",
        "Fenced Backyard",
        "Central Heating and Cooling",
        "Attached 2-Car Garage",
        "Basement Storage",
        "Near Schools and Parks",
        "Smart Home Features",
        "Stainless Steel Appliances",
        "Granite Countertops",
        "Hardwood Floors",
        "Ceiling Fans",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600566753051-f0b4ae0abd01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      ],
      propertyType: "Single-Family Home",
      yearBuilt: "2005 (Renovated 2021)",
      leaseTerm: "12-24 months",
      petPolicy: "Pets allowed with deposit",
      utilitiesIncluded: "None",
      deposit: "2,500",
      applicationFee: "75",
      nearbySchools: [
        "Quiet Hills Elementary (0.3 miles)",
        "Suburban Middle School (1.0 miles)",
        "Greenfield High School (1.5 miles)",
      ],
      publicTransportation: ["Bus Stop (0.4 miles)", "Park & Ride (2.0 miles)"],
      nearbyAmenities: [
        "Grocery Store (1.0 miles)",
        "Shopping Center (1.2 miles)",
        "Community Park (0.5 miles)",
        "Public Library (0.8 miles)",
        "Medical Center (1.5 miles)",
      ],
      agent: {
        name: "Michael Rodriguez",
        title: "Residential Property Specialist",
        phone: "(123) 456-7891",
        email: "michael@primeproperties.com",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    },
    prop3: {
      id: "prop3",
      title: "Studio Apartment",
      location: "789 Urban Blvd, Downtown",
      price: "850",
      beds: 1,
      baths: 1,
      sqft: 600,
      parking: "Street Parking",
      status: "Available Now",
      availableFrom: "Immediately",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description:
        "Cozy studio apartment in the heart of downtown, perfect for singles or couples. This efficient space features modern finishes, including a fully equipped kitchenette with granite countertops and stainless steel appliances. Large windows provide abundant natural light and city views. The living area includes a built-in Murphy bed and versatile furniture that maximizes the space. The bathroom features a walk-in shower with glass doors and modern fixtures. Building amenities include laundry facilities, a communal rooftop deck, and secure entry. Located within walking distance to restaurants, nightlife, and public transportation.",
      features: [
        "Modern Kitchenette",
        "Built-in Storage Solutions",
        "High-Speed Internet Ready",
        "Laundry Facilities in Building",
        "Secure Entry System",
        "Bike Storage",
        "Pet-Friendly",
        "Public Transportation Nearby",
        "Hardwood Floors",
        "Stainless Steel Appliances",
        "Large Windows",
        "Rooftop Access",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1605276371744-52d5c4a0bea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1605276372134-a53e4382fb6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1605276374707-270bb277a6f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      ],
      propertyType: "Studio Apartment",
      yearBuilt: "2010",
      leaseTerm: "6-12 months",
      petPolicy: "Cats only (with deposit)",
      utilitiesIncluded: "Water, Trash, Internet",
      deposit: "850",
      applicationFee: "35",
      nearbySchools: [
        "City Arts Academy (0.7 miles)",
        "Downtown University (0.5 miles)",
      ],
      publicTransportation: [
        "Bus Stop (0.1 miles)",
        "Subway Station (0.2 miles)",
        "Bike Share Station (0.1 miles)",
      ],
      nearbyAmenities: [
        "Convenience Store (0.1 miles)",
        "Coffee Shops (0.1 miles)",
        "Restaurants (0.2 miles)",
        "Nightlife (0.3 miles)",
        "Gym (0.2 miles)",
        "City Park (0.4 miles)",
      ],
      agent: {
        name: "Emily Chen",
        title: "Urban Living Specialist",
        phone: "(123) 456-7892",
        email: "emily@primeproperties.com",
        photo:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    },
    prop4: {
      id: "prop4",
      title: "Modern Condo",
      location: "101 Skyline Dr, High Rise District",
      price: "1,800",
      beds: 2,
      baths: 2,
      sqft: 1400,
      parking: "1 Reserved Spot",
      status: "New Listing",
      availableFrom: "July 15, 2023",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description:
        "Elegant 2-bedroom condo with high-end finishes throughout. This corner unit features floor-to-ceiling windows with panoramic city views, an open concept living area, and a gourmet kitchen with premium appliances and waterfall quartz countertops. The primary suite includes a spa-like bathroom with a soaking tub and walk-in shower, plus a custom walk-in closet. The second bedroom is perfect for guests or a home office. Additional features include a private balcony, in-unit laundry, and smart home technology. Building amenities include a fitness center, swimming pool, and 24-hour security. Located in the prestigious High Rise District with easy access to business centers, fine dining, and cultural attractions.",
      features: [
        "Floor-to-Ceiling Windows",
        "Gourmet Kitchen",
        "Spa-like Bathrooms",
        "In-unit Laundry",
        "Swimming Pool Access",
        "Fitness Center",
        "Concierge Service",
        "Private Balcony",
        "Smart Home Technology",
        "Quartz Countertops",
        "Hardwood Floors",
        "Walk-in Closets",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      ],
      propertyType: "Condominium",
      yearBuilt: "2019",
      leaseTerm: "12-24 months",
      petPolicy: "Small pets allowed with deposit",
      utilitiesIncluded: "Water, Trash, Cable",
      deposit: "1,800",
      applicationFee: "75",
      nearbySchools: [
        "Skyline Elementary (1.0 miles)",
        "City Preparatory Academy (1.2 miles)",
        "Metropolitan University (2.0 miles)",
      ],
      publicTransportation: [
        "Bus Stop (0.2 miles)",
        "Light Rail Station (0.5 miles)",
        "Rideshare Hub (0.1 miles)",
      ],
      nearbyAmenities: [
        "Gourmet Grocery (0.3 miles)",
        "Fine Dining (0.2 miles)",
        "Shopping District (0.5 miles)",
        "Art Gallery (0.4 miles)",
        "Luxury Spa (0.3 miles)",
        "City Park (0.7 miles)",
      ],
      agent: {
        name: "James Wilson",
        title: "Luxury Property Specialist",
        phone: "(123) 456-7893",
        email: "james@primeproperties.com",
        photo:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    },
    prop5: {
      id: "prop5",
      title: "Cozy Cottage",
      location: "222 Garden Lane, Greenville",
      price: "1,400",
      beds: 2,
      baths: 1,
      sqft: 900,
      parking: "Driveway",
      status: "Available Now",
      availableFrom: "Immediately",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description:
        "Charming 2-bedroom cottage with rustic charm and modern updates. This cozy home features original hardwood floors, a wood-burning fireplace, and a recently updated kitchen with farmhouse sink and butcher block countertops. The living room is bright and airy with large windows overlooking the garden. Both bedrooms offer ample closet space and ceiling fans. The bathroom has been updated with a clawfoot tub and subway tile. The private backyard includes a garden area with mature fruit trees and a covered patio perfect for relaxing. Located in a peaceful neighborhood with easy access to local shops and restaurants.",
      features: [
        "Original Hardwood Floors",
        "Wood-burning Fireplace",
        "Updated Kitchen",
        "Private Backyard",
        "Garden Area",
        "Covered Patio",
        "Storage Shed",
        "Quiet Neighborhood",
        "Farmhouse Sink",
        "Clawfoot Tub",
        "Fruit Trees",
        "Energy Efficient Appliances",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      ],
      propertyType: "Cottage",
      yearBuilt: "1945 (Updated 2020)",
      leaseTerm: "12 months",
      petPolicy: "Pets allowed with deposit",
      utilitiesIncluded: "Gardening service",
      deposit: "1,400",
      applicationFee: "50",
      nearbySchools: [
        "Greenville Elementary (0.7 miles)",
        "Garden Middle School (1.5 miles)",
        "Westside High School (2.0 miles)",
      ],
      publicTransportation: [
        "Bus Stop (0.5 miles)",
        "Community Shuttle (0.8 miles)",
      ],
      nearbyAmenities: [
        "Farmers Market (0.6 miles)",
        "Local Cafes (0.4 miles)",
        "Community Garden (0.3 miles)",
        "Public Library (0.7 miles)",
        "Neighborhood Park (0.2 miles)",
      ],
      agent: {
        name: "Olivia Thompson",
        title: "Residential Leasing Agent",
        phone: "(123) 456-7894",
        email: "olivia@primeproperties.com",
        photo:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    },
    prop6: {
      id: "prop6",
      title: "Luxury Villa",
      location: "333 Luxury Ave, Estates",
      price: "4,500",
      beds: 5,
      baths: 4.5,
      sqft: 4200,
      parking: "3-Car Garage",
      status: "Premium",
      availableFrom: "August 1, 2023",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      description:
        "Stunning 5-bedroom luxury villa in an exclusive gated community. This magnificent home features soaring ceilings, premium finishes, and an open floor plan perfect for entertaining. The gourmet kitchen includes top-of-the-line appliances, a large center island, and a walk-in pantry. The main floor primary suite offers a spa-inspired bathroom with a freestanding tub, oversized shower, and dual vanities. Four additional bedrooms with en-suite bathrooms are located upstairs, along with a bonus room that can be used as a home theater or game room. Outdoor amenities include a swimming pool, spa, outdoor kitchen, and expansive covered patio with fireplace. The professionally landscaped yard provides privacy and tranquility.",
      features: [
        "Gated Community",
        "Swimming Pool and Spa",
        "Outdoor Kitchen",
        "Home Theater",
        "Wine Cellar",
        "Smart Home Technology",
        "Primary Suite with Sitting Area",
        "Designer Landscaping",
        "Chef's Kitchen",
        "Marble Countertops",
        "Custom Cabinetry",
        "Heated Floors in Bathrooms",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      ],
      propertyType: "Luxury Villa",
      yearBuilt: "2020",
      leaseTerm: "12-36 months",
      petPolicy: "Case by case basis",
      utilitiesIncluded: "Landscaping, Pool Maintenance",
      deposit: "9,000",
      applicationFee: "100",
      nearbySchools: [
        "Estates Private Academy (1.0 miles)",
        "Luxury Preparatory School (2.5 miles)",
        "Elite High School (3.0 miles)",
      ],
      publicTransportation: [
        "Private Shuttle Service",
        "Helipad (community access)",
      ],
      nearbyAmenities: [
        "Private Golf Course (0.5 miles)",
        "Country Club (1.0 miles)",
        "Luxury Shopping (3.0 miles)",
        "Fine Dining (2.5 miles)",
        "Private Beach Access (5.0 miles)",
      ],
      agent: {
        name: "Robert Anderson",
        title: "Executive Property Manager",
        phone: "(123) 456-7895",
        email: "robert@primeproperties.com",
        photo:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
    },
  };

  return properties[propertyId] || properties["prop1"];
}
