<script lang="ts">
	const features = [
		{
			title: 'High-Grade Graphite',
			description: 'Our graphite meets the highest industry standards for purity and performance.'
		},
		{
			title: 'Sustainable Extraction',
			description: 'Utilizing eco-friendly mining techniques to minimize environmental impact.'
		},
		{
			title: 'Advanced Processing',
			description: 'State-of-the-art facilities ensure consistent quality and efficient production.'
		},
		{
			title: 'Supply Chain Integrity',
			description: 'Transparent and ethical sourcing from mine to market.'
		},
		{
			title: 'Customizable Solutions',
			description: 'Tailored graphite products to meet specific industry needs.'
		},
		{
			title: 'Innovation Focus',
			description: 'Continuous R&D to stay at the forefront of graphite applications.'
		}
	];
</script>

<div class="graphite-section">
	<div class="content-wrapper">
		<div class="header-content">
			<h1>Graphite</h1>
			<p>
				From electric vehicles to renewable energy storage, our high-quality graphite is driving the
				sustainable technology revolution.
			</p>
		</div>
	</div>
	<div class="image-container">
		<img
			src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/Screenshot%202024-07-17%20094036-vsGRNhXbX8pYtnkwN8vFXeymrsjm1W.png"
			alt="Graphite mining and processing"
			class="feature-image"
		/>
	</div>
	<div class="content-wrapper">
		<dl class="features-grid">
			{#each features as feature}
				<div class="feature-item">
					<dt class="feature-title">
						{feature.title}
					</dt>
					<dd class="feature-description">{feature.description}</dd>
				</div>
			{/each}
		</dl>
	</div>
</div>
