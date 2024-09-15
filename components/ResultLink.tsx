import Link from "next/link";
import { Bounce, toast } from "react-toastify";

type ResultLinkProps = {
	url: string;
}
export default function ResultLink(props: ResultLinkProps) {
	const notify = () => toast('🦄 Wow so easy!', {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Bounce
	});
	const handleUrlCopied = () => {
		navigator.clipboard.writeText(props.url);
		notify();
	}
	return (
		<div className="place-self-center grid">
			<p className="text-white font-bold rounded-lg text-center bg-linkColor p-5 animate-bounce drop-shadow-md">{props.url}</p>
			<div className="grid grid-cols-2 gap-10 m-5">
				<button onClick={handleUrlCopied} className="p-3 bg-buttonsColors rounded-lg drop-shadow-md hover:scale-125 transition-transform transform-gpu">Copy Url</button>
				<Link href={props.url} onClick={handleUrlCopied} className="p-3 rounded-lg bg-buttonsColors drop-shadow-md hover:scale-125 transition-transform transform-gpu">Copy and Go to</Link>
			</div>
		</div>
	);
}

