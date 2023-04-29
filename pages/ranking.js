import React from "react";
import greyProfile from "../public/grey_profile.svg";
import ranking1 from "../public/ranking1.svg";
import ranking2 from "../public/ranking2.svg";
import ranking3 from "../public/ranking3.svg";
import ranking4 from "../public/ranking4.svg";
import ranking5 from "../public/ranking5.svg";

import Image from "next/image";

const ranking = () => {
  return (
		<div className="w-screen h-screen">
			<div className="relative">
				<div className="absolute w-3/4 h-full gap-8 flex justify-center items-center">
					<Image className="bg-white w-1/5 self-start mt-2" priority src={greyProfile} alt="" />
					<div className="mt-2 flex flex-col">
						<p className="font-pirata text-3xl text-white">JOKER</p>
						<div className="flex gap-2">
							<p className="font-teko font-thin text-2xl text-white">MENTHY WU</p>
							<p className="font-teko text-3xl text-white font-bold">| 500</p>
						</div>
					</div>
				</div>
				<Image priority className="w-screen h-auto" src={ranking1} alt="" />
			</div>
			<div>
				<Image priority src={ranking2} alt="" />
			</div>
			<div>
				<Image priority src={ranking3} alt="" />
			</div>
			<div>
				<Image priority src={ranking4} alt="" />
			</div>
			<div>
				<Image priority src={ranking5} alt="" />
			</div>
		</div>
	);
};

export default ranking;
