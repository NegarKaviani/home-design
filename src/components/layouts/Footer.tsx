import React from "react";

const Footer: React.FC = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const email = data.get("email");
		// replace with real submit logic
		console.log("Subscribe requested:", email);
		form.reset();
	};

	return (
		<footer>
			{/* Top row: full-width background with form */}
			<div className="w-full bg-slate-900 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<h3 className="text-2xl font-semibold mb-2">Join our newsletter</h3>
					<p className="text-slate-300 mb-6">Get updates on new products and offers.</p>

					<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
						<label htmlFor="email" className="sr-only">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							placeholder="Enter your email"
							className="min-w-0 flex-1 rounded-md border-1 border-white text-white py-3 px-4 text-slate-900"
						/>
						<button
							type="submit"
							className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>

			{/* Middle row: three columns */}
			<div className="w-full bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
						<div>
							<h4 className="text-lg font-semibold mb-3">Contact</h4>
							<ul className="text-slate-600 space-y-2">
								<li>Address: 123 Green St.</li>
								<li>Phone: <a href="tel:123456789" className="hover:text-slate-900">123-456-789</a></li>
								<li>Email: <a href="mailto:hello@grass.example" className="hover:text-slate-900">hello@grass.example</a></li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-3">About</h4>
							<p className="text-slate-600">Short blurb about the company or site. <br/>
                            <a href="/about" className="text-slate-800 hover:underline">Learn more</a></p>
						</div>

						<div className="flex flex-col justify-between">
							<div>
								<h4 className="text-lg font-semibold mb-3">Quick access</h4>
								<ul className="text-slate-600 space-y-2">
									<li><a href="/products" className="hover:text-slate-900">Products</a></li>
									<li><a href="/gallery" className="hover:text-slate-900">Gallery</a></li>
									<li><a href="/contact" className="hover:text-slate-900">Support</a></li>
								</ul>
							</div>
							<div className="mt-6">
								<div className="flex gap-3">
									<a href="#" aria-label="Twitter" className="text-slate-600 hover:text-slate-800">
										<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.66.29-1.36.49-2.1.58.76-.46 1.34-1.18 1.61-2.04-.71.42-1.5.72-2.34.88A3.67 3.67 0 0 0 12.5 8.5c0 .29.03.58.1.86-3.04-.15-5.73-1.61-7.54-3.82-.32.55-.5 1.18-.5 1.86 0 1.28.65 2.4 1.64 3.06-.6-.02-1.16-.18-1.65-.45v.05c0 1.79 1.27 3.28 2.96 3.62-.31.08-.64.12-.98.12-.24 0-.48-.02-.71-.07.48 1.5 1.86 2.6 3.5 2.63A7.36 7.36 0 0 1 3 19.54 10.36 10.36 0 0 0 8.8 21c6.55 0 10.14-5.4 10.14-10.08v-.46c.7-.5 1.3-1.12 1.78-1.83-.64.28-1.33.47-2.04.55z"/></svg>
									</a>
									<a href="#" aria-label="Instagram" className="text-slate-600 hover:text-slate-800">
										<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8zM18.4 6.2a1.04 1.04 0 1 0 1.04 1.04A1.04 1.04 0 0 0 18.4 6.2z"/></svg>
									</a>
									<a href="#" aria-label="Facebook" className="text-slate-600 hover:text-slate-800">
										<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-2.9h2.2V9.1c0-2.2 1.3-3.4 3.3-3.4.96 0 1.97.17 1.97.17v2.2h-1.12c-1.1 0-1.44.68-1.44 1.38v1.67h2.45l-.39 2.9h-2.06v7A10 10 0 0 0 22 12z"/></svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bottom row: regular footer content */}
			<div className="w-full bg-white border-t border-slate-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
					<div className="text-slate-600">© {new Date().getFullYear()} Ceramic — All rights reserved.</div>
					<div className="flex gap-4 text-slate-600">
						<a href="/about" className="hover:text-slate-900">About</a>
						<a href="/contact" className="hover:text-slate-900">Contact</a>
						<a href="/privacy" className="hover:text-slate-900">Privacy</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
