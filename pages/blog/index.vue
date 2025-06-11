<template>
  <div>
    <SeoHead 
      title="Blog - Company Name | Latest News and Insights"
      description="Stay updated with the latest industry trends, news, and insights from Company Name's experts."
    />
    
    <!-- Page Header -->
    <section class="bg-blue-600 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Our Blog</h1>
        <p class="text-xl max-w-3xl mx-auto">Latest news, insights, and industry trends</p>
      </div>
    </section>
    
    <!-- Blog Posts Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- Featured Post -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8">Featured Article</h2>
          <div class="border rounded-lg overflow-hidden">
            <div class="bg-gray-200 h-80 flex items-center justify-center">
              <p class="text-gray-600">Featured Post Image</p>
            </div>
            <div class="p-8">
              <div class="mb-4">
                <span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Industry</span>
                <span class="text-gray-600 ml-4">May 15, 2023</span>
              </div>
              <h3 class="text-2xl font-bold mb-4">Industry Trends for 2023</h3>
              <p class="mb-6">Discover the latest trends shaping our industry and how you can stay ahead of the curve. Our experts analyze the most significant developments and provide actionable insights for your business.</p>
              <NuxtLink to="/blog/industry-trends" class="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium">Read Article</NuxtLink>
            </div>
          </div>
        </div>
        
        <!-- Recent Posts -->
        <div>
          <h2 class="text-3xl font-bold mb-8">Recent Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Post 1 -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <p class="text-gray-600">Blog Image</p>
              </div>
              <div class="p-6">
                <div class="mb-3">
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">Productivity</span>
                  <span class="text-gray-600 ml-2 text-sm">April 28, 2023</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">How to Boost Productivity</h3>
                <p class="mb-4">Learn proven strategies to increase productivity and efficiency in your business operations.</p>
                <NuxtLink to="/blog/boost-productivity" class="text-blue-600 hover:text-blue-800">Read more →</NuxtLink>
              </div>
            </div>
            
            <!-- Post 2 -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <p class="text-gray-600">Blog Image</p>
              </div>
              <div class="p-6">
                <div class="mb-3">
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">Case Study</span>
                  <span class="text-gray-600 ml-2 text-sm">April 10, 2023</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">Client Success Story</h3>
                <p class="mb-4">See how we helped a major client transform their business with our innovative solutions.</p>
                <NuxtLink to="/blog/success-story" class="text-blue-600 hover:text-blue-800">Read more →</NuxtLink>
              </div>
            </div>
            
            <!-- Post 3 -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <p class="text-gray-600">Blog Image</p>
              </div>
              <div class="p-6">
                <div class="mb-3">
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">Technology</span>
                  <span class="text-gray-600 ml-2 text-sm">March 22, 2023</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">The Future of Cloud Computing</h3>
                <p class="mb-4">Explore emerging trends in cloud technology and how they will impact businesses in the coming years.</p>
                <NuxtLink to="/blog/future-cloud-computing" class="text-blue-600 hover:text-blue-800">Read more →</NuxtLink>
              </div>
            </div>
            
            <!-- Post 4 -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <p class="text-gray-600">Blog Image</p>
              </div>
              <div class="p-6">
                <div class="mb-3">
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">Security</span>
                  <span class="text-gray-600 ml-2 text-sm">March 15, 2023</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">Cybersecurity Best Practices</h3>
                <p class="mb-4">Essential security measures every business should implement to protect against modern threats.</p>
                <NuxtLink to="/blog/cybersecurity-practices" class="text-blue-600 hover:text-blue-800">Read more →</NuxtLink>
              </div>
            </div>
            
            <!-- Post 5 -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <p class="text-gray-600">Blog Image</p>
              </div>
              <div class="p-6">
                <div class="mb-3">
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">Leadership</span>
                  <span class="text-gray-600 ml-2 text-sm">February 28, 2023</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">Effective Leadership in Remote Teams</h3>
                <p class="mb-4">Strategies for leading and motivating distributed teams in the modern workplace.</p>
                <NuxtLink to="/blog/remote-leadership" class="text-blue-600 hover:text-blue-800">Read more →</NuxtLink>
              </div>
            </div>
            
            <!-- Post 6 -->
            <div class="border rounded-lg overflow-hidden">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <p class="text-gray-600">Blog Image</p>
              </div>
              <div class="p-6">
                <div class="mb-3">
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">Innovation</span>
                  <span class="text-gray-600 ml-2 text-sm">February 15, 2023</span>
                </div>
                <h3 class="text-xl font-semibold mb-3">Fostering Innovation in Your Organization</h3>
                <p class="mb-4">How to create a culture of innovation that drives continuous improvement and growth.</p>
                <NuxtLink to="/blog/fostering-innovation" class="text-blue-600 hover:text-blue-800">Read more →</NuxtLink>
              </div>
            </div>
          </div>
          
          <!-- Pagination -->
          <div class="mt-12 flex justify-center">
            <div class="flex space-x-2">
              <button class="px-4 py-2 border rounded bg-blue-600 text-white">1</button>
              <button class="px-4 py-2 border rounded hover:bg-gray-100">2</button>
              <button class="px-4 py-2 border rounded hover:bg-gray-100">3</button>
              <span class="px-4 py-2">...</span>
              <button class="px-4 py-2 border rounded hover:bg-gray-100">10</button>
              <button class="px-4 py-2 border rounded hover:bg-gray-100">Next →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Subscribe Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Stay updated with our latest articles, industry insights, and company news.</p>
        <div class="max-w-md mx-auto">
          <form class="flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              class="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none"
              required
            >
            <button 
              type="submit" 
              class="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium"
            >
              Subscribe
            </button>
          </form>
          <p class="mt-4 text-sm">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page-specific logic can go here
</script> 