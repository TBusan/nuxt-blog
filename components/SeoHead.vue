<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'Your company\'s official website with the latest products and services information.'
  },
  image: {
    type: String,
    default: '/images/og-image.jpg'
  },
  url: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'website'
  }
})

// Computed full URL
const fullUrl = computed(() => {
  if (props.url.startsWith('http')) {
    return props.url
  }
  return `https://yourcompany.com${props.url || useRoute().path}`
})

// Computed full image URL
const fullImage = computed(() => {
  if (props.image.startsWith('http')) {
    return props.image
  }
  return `https://yourcompany.com${props.image}`
})

// Set meta tags using Nuxt's useHead
useHead({
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    // Open Graph / Facebook
    { property: 'og:type', content: props.type },
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: fullImage.value },
    { property: 'og:url', content: fullUrl.value },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: fullImage.value },
    // Additional SEO tags
    { name: 'robots', content: 'index, follow' },
    { name: 'canonical', content: fullUrl.value }
  ],
  link: [
    { rel: 'canonical', href: fullUrl.value }
  ]
})
</script>

<template>
  <div class="hidden">
    <!-- This component doesn't render anything visible, it only manages head meta tags -->
  </div>
</template> 