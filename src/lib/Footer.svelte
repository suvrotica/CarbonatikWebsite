<script>
	import { base } from '$app/paths';
</script>

<footer class="footer-container" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="footer-content">
		<div class="footer-grid">
			<img class="footer-logo" src="{base}/logo.png" alt="Carbonatik" />
			<div class="footer-links-grid">
				<div class="footer-links-column">
					<div>
						<h3 class="footer-heading">Operations</h3>
						<ul class="footer-list">
							<li><a href="#graphite">Graphite</a></li>
							<li><a href="#gold-mica">Gold Mica</a></li>
							<li><a href="#ruby-granite">Ruby Granite</a></li>
							<li><a href="#quartz">Quartz</a></li>
						</ul>
					</div>
					<div>
						<h3 class="footer-heading">Sustainability</h3>
						<ul class="footer-list">
							<li><a href="#environmental">Environmental Impact</a></li>
							<li><a href="#social-responsibility">Social Responsibility</a></li>
							<li><a href="#innovation">Innovation</a></li>
							<li><a href="#reports">Sustainability Reports</a></li>
						</ul>
					</div>
				</div>
				<div class="footer-links-column">
					<div>
						<h3 class="footer-heading">Company</h3>
						<ul class="footer-list">
							<li><a href="#about">About Us</a></li>
							<li><a href="#leadership">Leadership</a></li>
							<li><a href="#careers">Careers</a></li>
							<li><a href="#news">News</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</div>
					<div>
						<h3 class="footer-heading">Legal</h3>
						<ul class="footer-list">
							<li><a href="#privacy">Privacy Policy</a></li>
							<li><a href="#terms">Terms of Use</a></li>
							<li><a href="#compliance">Compliance</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-newsletter">
			<div>
				<h3 class="footer-heading">Subscribe to our newsletter</h3>
				<p class="footer-text">
					Stay updated with Carbonatik's latest news and innovations in sustainable mining.
				</p>
			</div>
			<form class="footer-form">
				<label for="email-address" class="sr-only">Email address</label>
				<input
					type="email"
					name="email-address"
					id="email-address"
					autocomplete="email"
					required
					class="footer-input"
					placeholder="Enter your email"
				/>
				<div>
					<button type="submit" class="footer-button">Subscribe</button>
				</div>
			</form>
		</div>
		<div class="footer-bottom">
			<div class="footer-social">
				<a href="/" class="footer-social-link">
					<span class="sr-only">LinkedIn</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
				<a href="/" class="footer-social-link">
					<span class="sr-only">Twitter</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
						/>
					</svg>
				</a>
			</div>
			<p class="footer-copyright">&copy; 2024 Carbonatik, Inc. All rights reserved.</p>
		</div>
	</div>
</footer>
