"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ProposalForm() {
	const [formData, setFormData] = useState({
		description: "",
		sideEvent: "",
		sponsorship: "",
		collaboration: "",
		execution: "",
		benefit: "",
		designs: "",
		booth: "",
		followUp: "",
		audience: "",
		outreach: "",
		marketing: "",
		documentation: "",
	});

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<div className="min-h-screen bg-black p-4">
			<div className="mx-auto max-w-4xl">
				<Card className="bg-white">
					<CardContent className="p-8">
						{/* Header */}
						<div className="mb-8 flex items-center justify-center gap-2">
							<span className="font-bold text-xl">EB</span>
							<span className="text-xl">×</span>
							<div className="flex items-center gap-1">
								<div className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500">
									<div className="h-3 w-3 rounded-full bg-white" />
								</div>
								<span className="font-semibold">Polkadot</span>
							</div>
						</div>

						{/* Title */}
						<h1 className="mb-8 text-center font-semibold text-xl">Review & Submit</h1>

						<div className="space-y-6">
							{/* Main Description */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									Describe your proposal and provide as much context as possible (500 words
									max)
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[100px] resize-none border-gray-300"
									value={formData.description}
									onChange={(e) => handleInputChange("description", e.target.value)}
								/>
							</div>

							{/* Side Event Description */}
							<div>
								<Label className="mb-2 block text-gray-700 text-sm">
									If you are doing a side event or a hackathon please describe the format,
									challenges, bounties, speakers, agenda etc.
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.sideEvent}
									onChange={(e) => handleInputChange("sideEvent", e.target.value)}
								/>
							</div>

							{/* Sponsorship */}
							<div>
								<Label className="mb-2 block text-gray-700 text-sm">
									If you are choosing a sponsorship, please clarify why you decided on that
									tier specifically(please attach the pitch deck at the top of the proposal in
									the dedicated section).
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.sponsorship}
									onChange={(e) => handleInputChange("sponsorship", e.target.value)}
								/>
							</div>

							{/* Collaboration */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									Which projects from the ecosystem are you collaborating with?
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.collaboration}
									onChange={(e) => handleInputChange("collaboration", e.target.value)}
								/>
							</div>

							{/* Execution */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									Why are you doing this kind of event and why are you the best team to execute
									it?
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.execution}
									onChange={(e) => handleInputChange("execution", e.target.value)}
								/>
							</div>

							{/* Benefit */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									How can the event benefit Polkadot? How does the technology, projects and
									community fit in?
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.benefit}
									onChange={(e) => handleInputChange("benefit", e.target.value)}
								/>
							</div>

							{/* Designs */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									Will you have any designs and/or merch?
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[60px] resize-none border-gray-300"
									value={formData.designs}
									onChange={(e) => handleInputChange("designs", e.target.value)}
								/>
								<p className="mt-2 text-gray-600 text-sm">
									Do you have your own designs prepared or will you use existing assets from
									Distractive? We recommend adding a designer to the budget and making a
									special design edition for each event by modifying the existing graphics yet
									sticking to brand guidelines.
								</p>
							</div>

							{/* Booth */}
							<div>
								<Label className="mb-2 block text-gray-700 text-sm">
									If you are applying for a sponsorship which includes a booth please provide a
									moodboard or let us know the concept
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.booth}
									onChange={(e) => handleInputChange("booth", e.target.value)}
								/>
							</div>

							{/* Follow Up */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									How will you follow up after the event?
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.followUp}
									onChange={(e) => handleInputChange("followUp", e.target.value)}
								/>
							</div>

							{/* Audience */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									What kind of audience does your event aim to attract? How will you engage
									your audience?
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.audience}
									onChange={(e) => handleInputChange("audience", e.target.value)}
								/>
								<p className="mt-2 text-gray-600 text-sm">
									Eg. activations, forms, POAPs, NFTs, Merch...
								</p>
							</div>

							{/* Outreach */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									How will you reach out to them post the event?
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.outreach}
									onChange={(e) => handleInputChange("outreach", e.target.value)}
								/>
							</div>

							{/* Marketing */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									What is your marketing strategy?
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.marketing}
									onChange={(e) => handleInputChange("marketing", e.target.value)}
								/>
							</div>

							{/* Documentation */}
							<div>
								<Label className="mb-2 block font-medium text-base">
									How do you plan to document the event (photo/video/post production)? How much
									content do you aim to produce?
								</Label>
								<Textarea
									placeholder=""
									className="min-h-[80px] resize-none border-gray-300"
									value={formData.documentation}
									onChange={(e) => handleInputChange("documentation", e.target.value)}
								/>
							</div>
						</div>

						{/* Buttons */}
						<div className="mt-8 flex justify-center gap-4">
							<Button variant="outline" className="bg-transparent px-8">
								Edit
							</Button>
							<Button className="bg-black px-8 hover:bg-gray-800">Submit</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
