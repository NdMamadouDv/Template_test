import Typography from "../ui/Typography";
import { Button } from "../ui/button";

type Props = {
	color: "primary" | "secondary";
};

const CardTypographies = ({ color }: Props) => {
	return (
		<article className="border-2 border-gray-200 p-4">
			<Typography
				variant="body-base"
				weight="medium"
				className="pb-4">
				{color}
			</Typography>
			<div className="flex items-center gap-4">
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
		</article>
	);
};

export default CardTypographies;
