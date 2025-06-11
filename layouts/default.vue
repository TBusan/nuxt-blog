<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold">Company Name</NuxtLink>
          
          <!-- 移动端菜单按钮 -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden flex items-center px-3 py-2 border rounded text-blue-600 border-blue-600"
          >
            <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path v-if="!mobileMenuOpen" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              <path v-else d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
            </svg>
          </button>
          
          <!-- 桌面端菜单 -->
          <div class="hidden md:flex space-x-6">
            <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
            <NuxtLink to="/about" class="hover:text-blue-600">About</NuxtLink>
            <NuxtLink to="/services" class="hover:text-blue-600">Services</NuxtLink>
            <NuxtLink to="/products" class="hover:text-blue-600">Products</NuxtLink>
            <NuxtLink to="/blog" class="hover:text-blue-600">Blog</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-blue-600">Contact</NuxtLink>
          </div>
        </div>
        
        <!-- 移动端菜单 -->
        <div 
          v-if="mobileMenuOpen" 
          class="md:hidden mt-4 pb-4"
        >
          <div class="flex flex-col space-y-3">
            <NuxtLink to="/" class="hover:text-blue-600 py-2 px-1 border-b border-gray-200" @click="mobileMenuOpen = false">Home</NuxtLink>
            <NuxtLink to="/about" class="hover:text-blue-600 py-2 px-1 border-b border-gray-200" @click="mobileMenuOpen = false">About</NuxtLink>
            <NuxtLink to="/services" class="hover:text-blue-600 py-2 px-1 border-b border-gray-200" @click="mobileMenuOpen = false">Services</NuxtLink>
            <NuxtLink to="/products" class="hover:text-blue-600 py-2 px-1 border-b border-gray-200" @click="mobileMenuOpen = false">Products</NuxtLink>
            <NuxtLink to="/blog" class="hover:text-blue-600 py-2 px-1 border-b border-gray-200" @click="mobileMenuOpen = false">Blog</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-blue-600 py-2 px-1" @click="mobileMenuOpen = false">Contact</NuxtLink>
          </div>
        </div>
      </nav>
    </header>
    
    <main class="flex-grow">
      <slot />
    </main>
    
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Company Name</h3>
            <p class="mb-4">Your trusted partner for innovative solutions.</p>
            <p>© {{ new Date().getFullYear() }} Company Name. All rights reserved.</p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="hover:text-blue-300">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-blue-300">About</NuxtLink></li>
              <li><NuxtLink to="/services" class="hover:text-blue-300">Services</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-blue-300">Blog</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-blue-300">Contact</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <address class="not-italic">
              <p class="mb-2">123 Business Street</p>
              <p class="mb-2">City, State 12345</p>
              <p class="mb-2">Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script> 