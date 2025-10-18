import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<section className="flex w-full flex-col items-center px-4 py-12 text-center md:py-24">
			<Image
				src="/images/404.svg"
				width="400"
				height="300"
				alt="Illustration"
				className="rounded-xl object-cover"
				style={{ aspectRatio: "400/300", objectFit: "cover" }}
			/>
			<div className="mt-8 space-y-4 text-center">
				<h1 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl">
					Lost in the clouds
				</h1>
				<p className="text-secondary-foreground">
					Whoops, looks like you took a wrong turn. Let&#x27;s get you back
					home.
				</p>
				<Link
					href="/"
					className="text-center transition-all hover:underline"
					prefetch={false}
				>
					Go back home
				</Link>
			</div>
		</section>
	);
}
