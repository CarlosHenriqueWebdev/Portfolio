import { useEffect, useState } from "react";
import gsap from "gsap";

function useScrollTriggerAnimation(ref, options = {}) {
	const {
		entranceScroll = false,
		heroScroll = false,
		skillsScroll = false,
		projectsScroll = false,
		entranceScrollDuration = 1,
	} = options;

	const [isMobile, setIsMobile] = useState(
		window.matchMedia("(max-width: 767px)").matches,
	);

	useEffect(() => {
		const resizeHandler = () => {
			setIsMobile(window.matchMedia("(max-width: 767px)").matches);
		};

		window.addEventListener("resize", resizeHandler);

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, []);

	useEffect(() => {
		if (!ref.current || isMobile) return;

		const ctx = gsap.context(() => {
			const container = ref.current;

			if (entranceScroll) {
				gsap.utils
					.toArray(container.querySelectorAll(".item"))
					.forEach((item, index) => {
						gsap.fromTo(
							item,
							{
								opacity: 0,
								y: 50,
							},
							{
								opacity: 1,
								y: 0,
								duration: entranceScrollDuration,
								delay: index * 0.5,
								scrollTrigger: {
									trigger: item,
									start: "top 400",
									end: "bottom bottom",
									scrub: false,
									once: false,
								},
							},
						);
					});
			} else if (heroScroll) {
				gsap.fromTo(
					container.querySelectorAll(".item"),
					{
						opacity: 0,
						y: 100,
					},
					{
						opacity: 1,
						y: 0,
						duration: entranceScrollDuration,
					},
				);
			} else if (skillsScroll) {
				gsap.fromTo(
					container.querySelectorAll(".itemSkill"),
					{
						opacity: 0,
						x: 50,
					},
					{
						opacity: 1,
						x: 0,
						stagger: 0.225,
						duration: entranceScrollDuration,
						scrollTrigger: {
							trigger: container,
							start: "top 400",
							end: "bottom bottom",
							scrub: false,
							once: true,
						},
					},
				);
			} else if (projectsScroll) {
				gsap.fromTo(
					container.querySelectorAll(".itemProjects"),
					{
						opacity: 0,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						stagger: 0.225,
						duration: entranceScrollDuration,
						scrollTrigger: {
							trigger: container,
							start: "top 400",
							end: "bottom bottom",
							scrub: false,
							once: true,
						},
					},
				);
			}
		});

		return () => {
			ctx.revert();
		};
	}, [
		ref,
		entranceScroll,
		skillsScroll,
		projectsScroll,
		heroScroll,
		entranceScrollDuration,
		isMobile,
	]);
}

export default useScrollTriggerAnimation;
