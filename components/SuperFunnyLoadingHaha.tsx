import { PropagateLoader } from "react-spinners";

type SuperFunnyLoadingHahaProps = {
	isLoading: boolean;
}




export default function SuperFunnyLoadingHaha(props: SuperFunnyLoadingHahaProps) {
	if (props.isLoading) {
		return (<>

			<div className="text-center grid grid-cols-1 place-items-center">
				<p>Wait i'm thinking 🤔 </p>
				<PropagateLoader />
			</div>

		</>)
	}
}
