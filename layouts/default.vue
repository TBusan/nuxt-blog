<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Company Name</NuxtLink>
        <div class="flex space-x-6">
          <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-blue-600">About</NuxtLink>
          <NuxtLink to="/services" class="hover:text-blue-600">Services</NuxtLink>
          <NuxtLink to="/products" class="hover:text-blue-600">Products</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-blue-600">Blog</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-blue-600">Contact</NuxtLink>
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