<script lang="ts">
	let {
		imgURL = 'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/ilmlffzIQaKXLsKXVfJGxQ-NgLkjfiHTzoIzX9YoMdShCufM42wJ3.webp',
		figCaption = 'Graphite Anodes',
		companyName = 'Carbonatik',
		missionStatement = 'Unearthing the future with sustainable mining practices',
		description = `In an age where technology shapes our future, Carbonatik stands at the crossroads of innovation and sustainability. We're not just mining resources; we're unearthing the building blocks of tomorrow's world. From the graphite in your smartphone's battery to the quartz in solar panels capturing clean energy, our minerals are the silent heroes powering the green revolution. This is our mission, and we're proud to be leading the charge.`
	} = $props<{
		imgURL?: string;
		figCaption?: string;
		companyName?: string;
		missionStatement?: string;
		description?: string;
	}>();

	let fullCompanyName = $derived(`${companyName} - Mining`);
</script>

<section>
	<figure>
		<img src={imgURL} alt={figCaption} />
		<figcaption>{figCaption}</figcaption>
	</figure>
	<article>
		<h1>{fullCompanyName}</h1>
		<h4>{missionStatement}</h4>
		<p>{description}</p>
	</article>
</section>
