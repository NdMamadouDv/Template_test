import Typography from "../../../../Components/ui/Typography";
import { Button } from "../../../../Components/ui/button";
import { SlHandbag } from "react-icons/sl";

type Props = {
	color: "primary" | "secondary";
};

const CardTypographies = ({ color }: Props) => {
	return (
		<article className="flex flex-col gap-4 border-2 border-gray-200 p-4">
			<Typography
				variant="body-base"
				weight="medium"
				className="pb-4">
				{color}
			</Typography>
			<div className="flex flex-col md:flex-row items-center gap-4">
				<Button
					variant={color}
					size="large">
					InDev Conception
				</Button>
				<Button variant={color}>InDev Conception</Button>
				<Button
					variant={color}
					size="small">
					InDev Conception
				</Button>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-4">
				<Button
					variant={color}
					size="large"
					icon={{ icon: SlHandbag }}>
					InDev Conception
				</Button>
				<Button
					variant={color}
					icon={{ icon: SlHandbag }}>
					InDev Conception
				</Button>
				<Button
					variant={color}
					size="small"
					icon={{ icon: SlHandbag }}>
					InDev Conception
				</Button>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-4">
				<Button
					variant={color}
					size="large"
					icon={{ icon: SlHandbag }}
					iconPosition="left">
					InDev Conception
				</Button>
				<Button
					variant={color}
					icon={{ icon: SlHandbag }}
					iconPosition="left">
					InDev Conception
				</Button>
				<Button
					variant={color}
					size="small"
					icon={{ icon: SlHandbag }}
					iconPosition="left">
					InDev Conception
				</Button>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-4">
				<Button
					variant={color}
					size="large"
					icon={{ icon: SlHandbag }}></Button>
				<Button
					variant={color}
					icon={{ icon: SlHandbag }}></Button>
				<Button
					variant={color}
					size="small"
					icon={{ icon: SlHandbag }}></Button>
			</div>
		</article>
	);
};

export default CardTypographies;
