<template>
  <div>
    <SeoHead 
      title="Company Name - Leading Provider of Innovative Solutions"
      description="We provide cutting-edge solutions for businesses of all sizes. Discover our services and products designed to help your business grow."
    />
    
    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Innovative Solutions for Your Business</h1>
          <p class="text-lg md:text-xl mb-6 md:mb-8">We help businesses grow with our cutting-edge products and services</p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <NuxtLink to="/services" class="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-center">Our Services</NuxtLink>
            <NuxtLink to="/contact" class="bg-transparent border border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium text-center mt-3 sm:mt-0">Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose Us</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-blue-600 text-2xl">✓</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Quality Service</h3>
            <p>We pride ourselves on delivering exceptional quality in everything we do.</p>
          </div>
          <div class="text-center">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-blue-600 text-2xl">⚡</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Our efficient processes ensure we deliver results quickly without compromising on quality.</p>
          </div>
          <div class="text-center">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-blue-600 text-2xl">💼</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Expert Team</h3>
            <p>Our team of industry experts brings years of experience to every project.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- About Section Preview -->
    <section class="bg-gray-100 py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div class="w-full md:w-1/2 order-2 md:order-1">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">About Our Company</h2>
            <p class="mb-4">Founded in 2010, Company Name has been at the forefront of innovation in our industry for over a decade.</p>
            <p class="mb-6">We are committed to providing solutions that address real business challenges and deliver measurable results for our clients.</p>
            <NuxtLink to="/about" class="text-blue-600 hover:text-blue-800 font-medium inline-block">Learn more about us →</NuxtLink>
          </div>
          <div class="w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <div class="bg-gray-300 h-64 md:h-80 rounded-lg flex items-center justify-center">
              <p class="text-gray-600">Company Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Latest Blog Posts -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Latest from Our Blog</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-gray-200 h-40 md:h-48 flex items-center justify-center">
              <p class="text-gray-600">Blog Image</p>
            </div>
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-semibold mb-2 md:mb-3">Industry Trends for 2023</h3>
              <p class="text-gray-600 mb-3 text-sm">May 15, 2023</p>
              <p class="mb-4 text-sm md:text-base">Discover the latest trends shaping our industry and how you can stay ahead of the curve.</p>
              <NuxtLink to="/blog/industry-trends" class="text-blue-600 hover:text-blue-800 text-sm md:text-base">Read more →</NuxtLink>
            </div>
          </div>
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-gray-200 h-40 md:h-48 flex items-center justify-center">
              <p class="text-gray-600">Blog Image</p>
            </div>
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-semibold mb-2 md:mb-3">How to Boost Productivity</h3>
              <p class="text-gray-600 mb-3 text-sm">April 28, 2023</p>
              <p class="mb-4 text-sm md:text-base">Learn proven strategies to increase productivity and efficiency in your business operations.</p>
              <NuxtLink to="/blog/boost-productivity" class="text-blue-600 hover:text-blue-800 text-sm md:text-base">Read more →</NuxtLink>
            </div>
          </div>
          <div class="border rounded-lg overflow-hidden sm:hidden md:block">
            <div class="bg-gray-200 h-40 md:h-48 flex items-center justify-center">
              <p class="text-gray-600">Blog Image</p>
            </div>
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-semibold mb-2 md:mb-3">Client Success Story</h3>
              <p class="text-gray-600 mb-3 text-sm">April 10, 2023</p>
              <p class="mb-4 text-sm md:text-base">See how we helped a major client transform their business with our innovative solutions.</p>
              <NuxtLink to="/blog/success-story" class="text-blue-600 hover:text-blue-800 text-sm md:text-base">Read more →</NuxtLink>
            </div>
          </div>
        </div>
        <div class="text-center mt-8 md:mt-10">
          <NuxtLink to="/blog" class="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">View All Posts</NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="bg-blue-600 text-white py-12 md:py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
        <p class="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">Contact us today to learn how our solutions can help your business grow and succeed.</p>
        <NuxtLink to="/contact" class="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-base md:text-lg inline-block">Contact Us Today</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// You can add any page-specific logic here
</script> 