/**
 * Car Mechanic Shop Management System
 * JavaScript functionality
 */

// Tab switching functionality
function switchTab(tabName) {
  // Hide all sections
  const sections = document.querySelectorAll('section')
  sections.forEach((section) => {
    section.classList.add('hidden')
  })

  // Show selected section
  const selectedSection = document.getElementById(tabName)
  if (selectedSection) {
    selectedSection.classList.remove('hidden')
  }

  // Update active button
  const navButtons = document.querySelectorAll('.nav-btn')
  navButtons.forEach((btn) => {
    btn.classList.remove('active')
  })

  // Find and activate the clicked button
  const activeBtn = Array.from(navButtons).find(
    (btn) => btn.textContent.toLowerCase() === tabName.toLowerCase(),
  )
  if (activeBtn) {
    activeBtn.classList.add('active')
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  console.log('Car Mechanic Shop Management System loaded')

  // Show jobs section by default
  switchTab('jobs')

  // Add event listeners for search bars
  const searchBars = document.querySelectorAll('.search-bar')
  searchBars.forEach((searchBar) => {
    searchBar.addEventListener('keyup', function () {
      console.log('Search term:', this.value)
      // Add search functionality here
    })
  })

  // Add event listeners for filter dropdowns
  const filterDropdowns = document.querySelectorAll('.filter-dropdown')
  filterDropdowns.forEach((dropdown) => {
    dropdown.addEventListener('change', function () {
      console.log('Filter changed:', this.value)
      // Add filter functionality here
    })
  })
})

// Utility function to format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

// Utility function to format date
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Function to handle job card click
function viewJobDetail(jobId) {
  console.log('Viewing job:', jobId)
  // Implement job detail modal or navigation here
}

// Function to handle customer card click
function viewCustomerDetail(customerId) {
  console.log('Viewing customer:', customerId)
  // Implement customer detail modal or navigation here
}

// Function to handle staff card click
function viewStaffDetail(staffId) {
  console.log('Viewing staff:', staffId)
  // Implement staff detail modal or navigation here
}

// Function to handle payment
function processPayment(jobId) {
  console.log('Processing payment for job:', jobId)
  // Implement payment processing here
}

// Debugging: Log all interactive elements
console.log('Interactive Elements:')
console.log('Nav buttons:', document.querySelectorAll('.nav-btn').length)
console.log('Job cards:', document.querySelectorAll('.job-card').length)
console.log(
  'Customer cards:',
  document.querySelectorAll('.customer-card').length,
)
