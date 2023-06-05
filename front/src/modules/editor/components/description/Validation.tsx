import React from "react";
import StickyBlock from "./StickyBlock";
import Typography from "@/Components/ui/Typography";
import validation from "@/data/checked.json";

const Validation = () => {
	return (
		<StickyBlock
			animation={validation}
			title="Soumettez votre demande"
			reverse>
			<Typography
				variant="body-lg"
				component="p">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
				mollitia totam veniam maxime dolorem rerum inventore ipsa voluptatem
				quasi dicta. Et mollitia reiciendis ratione alias.
			</Typography>
			<Typography
				variant="body-lg"
				component="p">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
				atque. Modi distinctio, dolorum fugiat pariatur alias libero esse quis
				fugit doloremque expedita voluptatem omnis natus odio ducimus laborum
				debitis suscipit, ullam sunt repudiandae. Commodi voluptates fugiat
				itaque corporis. Dolorem deleniti debitis voluptatibus atque nostrum
				harum sunt ipsa nisi minus perferendis voluptate illum ut, earum
				reprehenderit blanditiis doloremque. Veniam assumenda, maiores dolore
				itaque eaque dolorem eos quas suscipit dolor id eius, aspernatur,
				incidunt repellat quod. Velit?
			</Typography>
			<Typography
				variant="body-lg"
				component="p">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
				mollitia totam veniam maxime dolorem rerum inventore ipsa voluptatem
				quasi dicta. Et mollitia reiciendis ratione alias.
			</Typography>
			<Typography
				variant="body-lg"
				component="p">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
				atque. Modi distinctio, dolorum fugiat pariatur alias libero esse quis
				fugit doloremque expedita voluptatem omnis natus odio ducimus laborum
				debitis suscipit, ullam sunt repudiandae. Commodi voluptates fugiat
				itaque corporis. Dolorem deleniti debitis voluptatibus atque nostrum
				harum sunt ipsa nisi minus perferendis voluptate illum ut, earum
				reprehenderit blanditiis doloremque. Veniam assumenda, maiores dolore
				itaque eaque dolorem eos quas suscipit dolor id eius, aspernatur,
				incidunt repellat quod. Velit?
			</Typography>
			<Typography
				variant="body-lg"
				component="p">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
				mollitia totam veniam maxime dolorem rerum inventore ipsa voluptatem
				quasi dicta. Et mollitia reiciendis ratione alias.
			</Typography>
		</StickyBlock>
	);
};

export default Validation;
