import { Logo } from "@/components/Logo";

export default function CoverPage() {
	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<div className="w-full max-w-md rounded-2xl p-12 text-center shadow-lg">
				{/* Heart Logo */}
				<div className="mb-6 flex justify-center">
					<Logo className="size-16" />
				</div>

				{/* Main Title */}
				<h1 className="text-accent-foreground mb-4 text-3xl font-bold">
					Healthy Recipe Explorer
				</h1>

				{/* Subtitle */}
				<p className="text-muted-foreground text-lg">
					Finding your next favorite meal...
				</p>
			</div>
		</div>
	);
}
