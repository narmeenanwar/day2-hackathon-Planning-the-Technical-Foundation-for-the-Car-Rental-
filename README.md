The frontend of the website Day 2 - Hackathon

Assignment : DAY 2 PLANNING THE TECHNICAL FOUNDATION FOR THE RENTAL CAR

GIAIC


OverView: This document provides a detailed explanation of how to design, develop, and deploy a rental car e-commerce platform. The goal is to provide an easy-to-understand guide that covers all aspects, from technical requirements to system architecture, APIs, and workflows.


1. Technical Requirements:



-- Frontend
ensures a user-friendly interface. Key components include:

1.Homepage: Displays featured cars and promotions.

2. Car Listing Page: Showcases all available cars with filters (e.g., price, type, availability).

3. Car Details Page: Provides detailed information about selected cars.

4. Cart and Checkout Pages: Enable users to review bookings and complete payments.

Technology Stack:

. Framework: Next.js for SSR (Server-Side Rendering).

. Styling: Tailwind CSS or Bootstrap for responsive design.

-- Content Management

1. Use Sanity CMS to manage car listings and rental orders dynamically.

-- Third-Party Integrations

1. Payment Gateways: Stripe or PayPal for secure transactions.

2. Shipment/Booking Tracking: APIs for tracking rental pickups or deliveries.




2. System Architecture:



-- Diagram

Below is a simplified system architecture for the platform:

[Frontend (Next.js)]
      |
[Sanity CMS] --> [Car Data API]
      |
[Third-Party API] --> [Payment Gateway] --> [Rental Confirmation]

-- Explanation

1. Frontend communicates with the backend to fetch car data and handle user actions.

2. Sanity CMS manages dynamic content like car details and booking information.

3.Third-Party APIs handle external processes, such as payments and tracking.




3. API Requirements




-- Endpoints

Get Car Listings

Endpoint: /api/cars

Method: GET

Description: Retrieves a list of available cars.

Get Car Details

Endpoint: /api/cars/:id

Method: GET

Description: Retrieves details of a specific car.

Create Booking

Endpoint: /api/bookings

Method: POST

Description: Creates a new booking.

-- Sample Schema

export default {
  name: "car",
  type: "document",
  title: "Car",
  fields: [

  
  {
      name: "name",
      type: "string",
      title: "Car Name",
    },
    {
      name: "pricePerDay",
      type: "number",
      title: "Price Per Day",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "availability",
      type: "boolean",
      title: "Available",
    },
  ],

  
};



4. Workflow


--User Journey

1. Visit Homepage: Users browse featured cars.

2. Filter Cars: Use filters to refine the car list.

3. Select a Car: View details and choose rental duration.

4. Add to Cart: Add selected car and review the cart.

5. Checkout: Complete the booking by entering payment details.

6. Confirmation: Receive a booking confirmation and tracking details.




-- Feedback and Improvements




. Group Discussions: Regularly share progress with peers to gather ideas.

. Mentor Feedback: Present the plan to mentors for expert suggestions.

-- Key Deliverables

1. By following this plan, you should have:

2. A clear technical strategy.

3. A detailed system diagram.

4. Comprehensive API documentation.

5. Sanity CMS schema drafts.

