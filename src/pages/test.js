// components/AnimatedComponent.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const container = sectionRef.current;

			console.log(container.querySelectorAll(".item"));

			if (container) {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: container,
						pinSpacing: false,
						start: "top top",
						end: "bottom bottom",
						scrub: true,
						markers: true,
					},
				});

				tl.fromTo(
					container.querySelectorAll(".item"),
					{
						opacity: 1,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						duration: 10,
						stagger: 0.5,
					},
				);
			}
		});

		return () => {
			ctx.revert();
		};
	}, [sectionRef]);

	return (
		<div>
			<div className="p-10 h-screen overflow-y-scroll bg-gray-100">
				<div className="h-64 mb-8">
					<p className="text-lg text-center">section </p>
				</div>
				<div className="h-64 mb-8">
					<p className="text-lg text-center">section </p>
				</div>
				<div className="h-64 mb-8">
					<p className="text-lg text-center">section </p>
				</div>
				<div ref={sectionRef} className="mb-8">
					<h1 className="text-4xl font-bold text-center">Welcome to My Site</h1>
					<p className="text-lg text-center mt-4 item">
						This is an example of GSAP animations in Next.js.
					</p>
					<p className="text-lg text-center mt-4 item">
						This is an example of GSAP animations in Next.js.
					</p>
				</div>
				{/* Add more content to make scrolling more visible */}
				<div className="h-64 bg-gray-300 mb-8">
					{" "}
					<p className="text-lg text-center">section </p>
				</div>
				<div className="h-64 bg-gray-300 mb-8">
					{" "}
					<p className="text-lg text-center">section </p>
				</div>
				<div className="h-64 bg-gray-300 mb-8">
					{" "}
					<p className="text-lg text-center">section </p>
				</div>
			</div>
		</div>
	);
};

export default AnimatedComponent;
