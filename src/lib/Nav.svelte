<script>
    let navItems = $state([
      { href: '#about', text: 'About Us' },
      { href: '#operations', text: 'Our Operations' },
      { href: '#investor-relations', text: 'Investor Relations' },
      { href: '#contact', text: 'Contact' }
    ]);
  </script>
  
  <nav class="bg-graphite text-white p-4 border border-black">
    <ul class="flex space-x-4">
      {#each navItems as item}
        <li><a href={item.href} class="hover:text-goldmica">{item.text}</a></li>
      {/each}
    </ul>
  </nav>