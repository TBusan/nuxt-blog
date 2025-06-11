<template>
  <div>
    <SeoHead 
      title="Contact Us - Company Name | Get in Touch"
      description="Contact Company Name for inquiries about our products and services. Our team is ready to help with your business needs."
    />
    
    <!-- Page Header -->
    <section class="bg-blue-600 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
        <p class="text-xl max-w-3xl mx-auto">Get in touch with our team for inquiries, support, or partnerships</p>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-12">
          <!-- Contact Information -->
          <div class="md:w-1/3">
            <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-2">Address</h3>
              <address class="not-italic">
                123 Business Street<br>
                City, State 12345<br>
                Country
              </address>
            </div>
            
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-2">Phone</h3>
              <p>(123) 456-7890</p>
              <p>(123) 456-7891</p>
            </div>
            
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-2">Email</h3>
              <p>info@company.com</p>
              <p>support@company.com</p>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-2">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="md:w-2/3 bg-gray-50 p-8 rounded-lg">
            <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="firstName" class="block mb-2 font-medium">First Name*</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="form.firstName" 
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                </div>
                <div>
                  <label for="lastName" class="block mb-2 font-medium">Last Name*</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="form.lastName" 
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="email" class="block mb-2 font-medium">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                </div>
                <div>
                  <label for="phone" class="block mb-2 font-medium">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone" 
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
              </div>
              
              <div class="mb-6">
                <label for="subject" class="block mb-2 font-medium">Subject*</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
              </div>
              
              <div class="mb-6">
                <label for="message" class="block mb-2 font-medium">Message*</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5" 
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <div class="mb-6">
                <label class="flex items-center">
                  <input 
                    type="checkbox" 
                    v-model="form.consent" 
                    class="mr-2"
                    required
                  >
                  <span>I consent to having this website store my submitted information so they can respond to my inquiry.</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                :disabled="submitting"
              >
                {{ submitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <div v-if="formStatus" class="mt-4 p-4 rounded-md" :class="formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                {{ formStatus.message }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="py-8">
      <div class="container mx-auto px-4">
        <div class="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
          <p class="text-gray-600">Map Placeholder - Google Maps integration will go here</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false
});

const submitting = ref(false);
const formStatus = ref(null);

const submitForm = async () => {
  submitting.value = true;
  formStatus.value = null;
  
  try {
    // In a real implementation, you would send the form data to your API
    // await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: form.value
    // });
    
    // Simulating API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    formStatus.value = {
      type: 'success',
      message: 'Thank you for your message! We will get back to you soon.'
    };
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false
    };
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: 'There was an error sending your message. Please try again later.'
    };
    console.error('Form submission error:', error);
  } finally {
    submitting.value = false;
  }
};
</script> 