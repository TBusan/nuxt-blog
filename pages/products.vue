<template>
  <div>
    <SeoHead 
      title="Our Products - Company Name | Innovative Solutions"
      description="Discover our innovative products designed to address your business challenges and drive success."
    />
    
    <!-- Page Header -->
    <section class="bg-blue-600 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Our Products</h1>
        <p class="text-xl max-w-3xl mx-auto">Innovative solutions designed with your business needs in mind</p>
      </div>
    </section>
    
    <!-- Featured Products -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Featured Products</h2>
        
        <!-- Product 1 -->
        <div class="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div class="md:w-1/2">
            <div class="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
              <p class="text-gray-600">Product Image</p>
            </div>
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold mb-4">Enterprise Solution Pro</h3>
            <p class="mb-4">Our flagship enterprise solution designed to streamline operations, enhance productivity, and drive business growth.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Comprehensive workflow automation</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Advanced analytics and reporting</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Seamless integration with existing systems</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Enterprise-grade security</div>
              </li>
            </ul>
            <NuxtLink to="/products/enterprise-solution" class="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium">Learn More</NuxtLink>
          </div>
        </div>
        
        <!-- Product 2 -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-12 mb-16">
          <div class="md:w-1/2">
            <div class="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
              <p class="text-gray-600">Product Image</p>
            </div>
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold mb-4">Data Analytics Platform</h3>
            <p class="mb-4">An advanced analytics platform that transforms your data into actionable insights to drive informed decision-making.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Real-time data processing</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Customizable dashboards and visualizations</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Predictive analytics capabilities</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Data integration from multiple sources</div>
              </li>
            </ul>
            <NuxtLink to="/products/analytics-platform" class="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium">Learn More</NuxtLink>
          </div>
        </div>
        
        <!-- Product 3 -->
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <div class="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
              <p class="text-gray-600">Product Image</p>
            </div>
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold mb-4">Cloud Management Suite</h3>
            <p class="mb-4">A comprehensive cloud management solution that simplifies infrastructure management and optimizes performance.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Centralized cloud resource management</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Cost optimization and monitoring</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Automated scaling and provisioning</div>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 font-bold mr-2">✓</span>
                <div>Comprehensive security controls</div>
              </li>
            </ul>
            <NuxtLink to="/products/cloud-management" class="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium">Learn More</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Product Categories -->
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Product Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3">Enterprise Solutions</h3>
            <p class="mb-4">Comprehensive solutions for large enterprises with complex requirements.</p>
            <NuxtLink to="/products/categories/enterprise" class="text-blue-600 hover:text-blue-800">View products →</NuxtLink>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3">SMB Solutions</h3>
            <p class="mb-4">Tailored solutions for small and medium-sized businesses.</p>
            <NuxtLink to="/products/categories/smb" class="text-blue-600 hover:text-blue-800">View products →</NuxtLink>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-3">Industry-Specific</h3>
            <p class="mb-4">Specialized solutions designed for specific industries and use cases.</p>
            <NuxtLink to="/products/categories/industry" class="text-blue-600 hover:text-blue-800">View products →</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Need Help Choosing the Right Product?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Our product specialists are ready to help you find the perfect solution for your business needs.</p>
        <NuxtLink to="/contact" class="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-medium text-lg">Contact Us Today</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page-specific logic can go here
</script> 