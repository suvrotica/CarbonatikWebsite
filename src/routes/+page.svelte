
<script lang="ts">
    import Hero from "$lib/Hero.svelte";
</script>

<Hero/>    

  <main class="container mx-auto mt-8">
    <section id="home" class="mb-12">
        <h2 class="text-4xl font-bold mb-4">Welcome to Carbonatik</h2>
        <p class="text-xl">Your premier source for high-quality minerals and gemstones. Explore our state-of-the-art mining operations, committed to excellence and sustainability.</p>
    </section>

    <section id="about" class="mb-12">
        <h2 class="text-3xl font-bold mb-4">About Us</h2>
        <p class="mb-4">At Carbonatik, we're dedicated to responsible mining practices and delivering top-tier minerals to our clients. Our diverse portfolio includes graphite, gold mica, granite, quartz, and precious gemstones.</p>
        <h3 class="text-2xl font-bold mb-2">Leadership Team</h3>
        <ul class="grid grid-cols-2 gap-4">
            <li>
                <strong>Joseph Kamalesh Swaminathan</strong><br>
                Chairman and CEO
            </li>
            <li>
                <strong>Brendan T Fitzpatrick</strong><br>
                President
            </li>
            <!-- Add other team members here -->
        </ul>
    </section>

    <section id="operations" class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Our Operations</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded shadow">
                <h3 class="text-2xl font-bold mb-2">Graphite Mining</h3>
                <p>Active mine capacity: 3,000 metric tons/month</p>
                <p>Four additional mines under exploration</p>
                <p>Total estimated reserves: 6 million tons</p>
            </div>
            <div class="bg-white p-6 rounded shadow">
                <h3 class="text-2xl font-bold mb-2">Gold Mica Mining</h3>
                <p>Operational by October 2024</p>
                <p>Estimated reserves: 10 million tons</p>
            </div>
            <!-- Add other mining operations here -->
        </div>
    </section>

    <section id="investor-relations" class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Investor Relations</h2>
        <p class="mb-4">Access our latest reports, financial statements, and investor presentations. Contact us to learn more about investment opportunities with Carbonatik.</p>
        <a href="/" class="bg-blue-500 text-white px-4 py-2 rounded">Download Investor Package</a>
    </section>

    <section id="contact" class="mb-12">
        <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
        <p>Interested in learning more about Carbonatik or our investment opportunities? Get in touch with our team today.</p>
        <a href="mailto:info@carbonatik.com" class="text-blue-500">info@carbonatik.com</a>
    </section>
</main>
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>