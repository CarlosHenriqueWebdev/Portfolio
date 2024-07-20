import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col gap-[16px]">
			<h3 className="itemSkill font-bold text-[1.25rem]">{t("skillsText1")}</h3>

			<ul className="grid gap-x-[16px] gap-y-[12px] sm:grid-cols-2 md:grid-cols-3 w-full">
				{t("skillsData", { returnObjects: true }).map((mapItem) => (
					<li
						aria-label={`${mapItem.name}, ${t("accessibilityText10")}`}
						key={mapItem.id}
						className="itemSkill bg-color03 text-[white] px-[16px] py-[12px] flex gap-[8px] items-center w-full h-full font-medium"
					>
						<Image
							aria-hidden={true}
							className={`w-[20px] h-[20px]`}
							src={mapItem.imageSrc}
							alt={`${mapItem.name} Logo`}
							width={0}
							height={0}
							unoptimized
						/>
						<p className="w-fit">{mapItem.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
