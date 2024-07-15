<script lang="ts">
  let { 
    imgURL = 'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/ilmlffzIQaKXLsKXVfJGxQ-NgLkjfiHTzoIzX9YoMdShCufM42wJ3.webp',
    figCaption = 'Carbonatik Mining Operations',
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

  let fullCompanyName = $derived(`${companyName} - Mining Operations`);
</script>

<section class="about-carbonatik">
  <figure>
    <img src={imgURL} alt={figCaption} class="mining-image" />
    <figcaption>{figCaption}</figcaption>
  </figure>
  <article>
    <h1>{fullCompanyName}</h1>
    <h2>{missionStatement}</h2>
    <p>{description}</p>
  </article>
</section>
<style>
    .about-carbonatik {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      background-color: #aea582;
    }
  
    .mining-image {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    figure {
      margin: 0;
      padding: 0;
      text-align: center;
    }
  
    figcaption {
      margin-top: 0.5rem;
      font-style: italic;
      color: #373636;
    }
  
    article {
      margin-top: 2rem;
      max-width: 800px;
    }
  
    h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 0.5rem;
    }
  
    h2 {
      font-size: 1.5rem;
      color: #666;
      margin-bottom: 1rem;
    }
  
    p {
      font-size: 20px;
      text-align: justify;
      line-height: 2;
      color: #aaa9a9;
      white-space: pre-wrap;
    }
  
    @media (min-width: 768px) {
      .about-carbonatik {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
  
      figure {
        flex: 1;
        margin-right: 2rem;
      }
  
      article {
        flex: 2;
        margin-top: 0;
      }
    }
  </style>