<template>
  <div>
    <SeoHead 
      title="Our Services - Company Name | Professional Solutions"
      description="Explore our comprehensive range of professional services designed to help your business grow and succeed."
    />
    
    <!-- Page Header -->
    <section class="bg-blue-600 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Our Services</h1>
        <p class="text-xl max-w-3xl mx-auto">Comprehensive solutions tailored to your business needs</p>
      </div>
    </section>
    
    <!-- Services Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-blue-100 h-48 flex items-center justify-center">
              <span class="text-blue-600 text-4xl">✓</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">Consulting Services</h3>
              <p class="mb-4">Expert advice and guidance to help you navigate complex business challenges and identify opportunities for growth.</p>
              <NuxtLink to="/services/consulting" class="text-blue-600 hover:text-blue-800">Learn more →</NuxtLink>
            </div>
          </div>
          
          <!-- Service 2 -->
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-blue-100 h-48 flex items-center justify-center">
              <span class="text-blue-600 text-4xl">⚙️</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">Implementation</h3>
              <p class="mb-4">End-to-end implementation services to ensure your solutions are deployed efficiently and effectively.</p>
              <NuxtLink to="/services/implementation" class="text-blue-600 hover:text-blue-800">Learn more →</NuxtLink>
            </div>
          </div>
          
          <!-- Service 3 -->
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-blue-100 h-48 flex items-center justify-center">
              <span class="text-blue-600 text-4xl">🔄</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">Managed Services</h3>
              <p class="mb-4">Ongoing support and maintenance to keep your systems running smoothly and efficiently.</p>
              <NuxtLink to="/services/managed-services" class="text-blue-600 hover:text-blue-800">Learn more →</NuxtLink>
            </div>
          </div>
          
          <!-- Service 4 -->
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-blue-100 h-48 flex items-center justify-center">
              <span class="text-blue-600 text-4xl">📊</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">Data Analytics</h3>
              <p class="mb-4">Advanced analytics solutions to help you gain insights from your data and make informed decisions.</p>
              <NuxtLink to="/services/analytics" class="text-blue-600 hover:text-blue-800">Learn more →</NuxtLink>
            </div>
          </div>
          
          <!-- Service 5 -->
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-blue-100 h-48 flex items-center justify-center">
              <span class="text-blue-600 text-4xl">🔒</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">Security Solutions</h3>
              <p class="mb-4">Comprehensive security services to protect your data, systems, and infrastructure from threats.</p>
              <NuxtLink to="/services/security" class="text-blue-600 hover:text-blue-800">Learn more →</NuxtLink>
            </div>
          </div>
          
          <!-- Service 6 -->
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-blue-100 h-48 flex items-center justify-center">
              <span class="text-blue-600 text-4xl">💼</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">Business Transformation</h3>
              <p class="mb-4">Strategic services to help you transform your business and stay competitive in a changing market.</p>
              <NuxtLink to="/services/transformation" class="text-blue-600 hover:text-blue-800">Learn more →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Contact us today to learn how our services can help your business grow and succeed.</p>
        <NuxtLink to="/contact" class="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-medium text-lg">Contact Us Today</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page-specific logic can go here
</script> 