<template>
  <header
    class="border-b border-neutral-800 p-4 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur z-50">
    <div class="font-bold text-xl tracking-widest">NAKAMICHI</div>
    <nav class="hidden md:flex gap-6 text-sm uppercase tracking-wider text-gray-400">
      <a href="#" class="hover:text-white">Models</a>
      <a href="#" class="hover:text-white">Resources</a>
      <a href="#" class="hover:text-white">Support</a>
      <a href="#" class="hover:text-white">About Us</a>
    </nav>
    <div class="flex gap-4">
      <Button variant="ghost" size="icon">
        <span class="sr-only">Search</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-search">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </Button>
    </div>
  </header>
</template>
