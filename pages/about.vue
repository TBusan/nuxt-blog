<template>
  <div>
    <SeoHead 
      title="About Us - Company Name | Our Story, Mission, and Values"
      description="Learn about Company Name, our mission, values, and the team behind our innovative solutions. Discover our journey and vision for the future."
    />
    
    <!-- Page Header -->
    <section class="bg-blue-600 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">About Us</h1>
        <p class="text-xl max-w-3xl mx-auto">Get to know our company, our values, and the team behind our success</p>
      </div>
    </section>
    
    <!-- Company Story Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold mb-6">Our Story</h2>
            <p class="mb-4">Founded in 2010, Company Name started with a simple mission: to provide innovative solutions that help businesses thrive in an increasingly digital world.</p>
            <p class="mb-4">What began as a small team of passionate professionals has grown into a company trusted by businesses of all sizes across various industries.</p>
            <p>Through continuous innovation and a commitment to excellence, we've established ourselves as leaders in our field, consistently delivering results that exceed our clients' expectations.</p>
          </div>
          <div class="md:w-1/2">
            <div class="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
              <p class="text-gray-600">Company History Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Mission & Values Section -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
            <p class="mb-4">To empower businesses with innovative solutions that drive growth, efficiency, and competitive advantage in the digital age.</p>
            <p>We are committed to being partners in our clients' success, delivering not just products and services, but transformative outcomes that help them achieve their goals.</p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-4">Our Values</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">→</span>
                <div>
                  <strong class="font-medium">Innovation:</strong> We constantly explore new ideas and technologies to stay at the forefront of our industry.
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">→</span>
                <div>
                  <strong class="font-medium">Excellence:</strong> We are committed to delivering the highest quality in everything we do.
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">→</span>
                <div>
                  <strong class="font-medium">Integrity:</strong> We operate with honesty, transparency, and ethical practices in all our business dealings.
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">→</span>
                <div>
                  <strong class="font-medium">Customer Focus:</strong> We put our clients' needs first and measure our success by their satisfaction.
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">→</span>
                <div>
                  <strong class="font-medium">Collaboration:</strong> We believe in the power of teamwork, both within our organization and with our clients.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">Our Leadership Team</h2>
        <p class="text-center mb-12 max-w-3xl mx-auto">Meet the experienced professionals who guide our company's vision and strategy</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div class="text-center">
            <div class="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p class="text-gray-600">Photo</p>
            </div>
            <h3 class="text-xl font-semibold mb-1">John Smith</h3>
            <p class="text-blue-600 mb-3">Chief Executive Officer</p>
            <p class="px-6">With over 20 years of industry experience, John leads our company with vision and strategic insight.</p>
          </div>
          
          <!-- Team Member 2 -->
          <div class="text-center">
            <div class="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p class="text-gray-600">Photo</p>
            </div>
            <h3 class="text-xl font-semibold mb-1">Sarah Johnson</h3>
            <p class="text-blue-600 mb-3">Chief Technology Officer</p>
            <p class="px-6">Sarah drives our technology strategy, ensuring we stay at the cutting edge of innovation.</p>
          </div>
          
          <!-- Team Member 3 -->
          <div class="text-center">
            <div class="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
              <p class="text-gray-600">Photo</p>
            </div>
            <h3 class="text-xl font-semibold mb-1">David Chen</h3>
            <p class="text-blue-600 mb-3">Chief Operations Officer</p>
            <p class="px-6">David ensures operational excellence across all aspects of our business.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Join Our Team</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">We're always looking for talented individuals who share our values and passion for innovation.</p>
        <NuxtLink to="/careers" class="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-medium text-lg">View Career Opportunities</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// You can add any page-specific logic here
</script> 