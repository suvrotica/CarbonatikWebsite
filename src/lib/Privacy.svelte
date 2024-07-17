<script lang="ts">
	let {
		imgURL = 'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/TLpB70vMQiGr1ehmQrBXpg-MCA3R8SGbLmZ0rerWjLQgxfSz0hx3A.webp',
		figCaption = 'Data Security in Mining',
		sectionTitle = 'Privacy & Security',
		sectionSubtitle = 'Protecting Your Information with the Same Dedication We Protect Our Resources',
		description = `At Carbonatik, we apply the same rigorous standards to data protection as we do to our mining operations. We collect only essential information to improve our processes, ensure regulatory compliance, and optimize our environmental strategies. Your personal data is treated with utmost care, protected by robust security measures. We're committed to transparency in our data practices, just as we are in our mining operations. Trust in Carbonatik - where your information is as valuable as the minerals we unearth.`
	} = $props<{
		imgURL?: string;
		figCaption?: string;
		sectionTitle?: string;
		sectionSubtitle?: string;
		description?: string;
	}>();
</script>

<section id="privacy-policy">
	<article>
		<h2>{sectionTitle}</h2>
		<h4>{sectionSubtitle}</h4>
		<p>{description}</p>
	</article>
	<figure>
		<img src={imgURL} alt={figCaption} />
		<figcaption>{figCaption}</figcaption>
	</figure>
</section>
