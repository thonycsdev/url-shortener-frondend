import Link from "next/link";

type ResultLinkProps = {
	url: string;
}
export default function ResultLink(props: ResultLinkProps) {
	const handleUrlCopied = () => {
		navigator.clipboard.writeText(props.url);
		alert("Text Copied");
	}
	return (
		<div className="place-self-center grid">
			<p className="text-white font-bold rounded-lg text-center bg-linkColor p-3 animate-bounce drop-shadow-md">{props.url}</p>
			<div className="grid grid-cols-2 gap-10 m-5">
				<button onClick={handleUrlCopied} className="p-3  bg-buttonsColors rounded-lg drop-shadow-md hover:scale-125 transition-transform transform-gpu text-center">Copy Url</button>
				<Link href={props.url} onClick={handleUrlCopied}><button className="p-3  rounded-lg bg-buttonsColors drop-shadow-md hover:scale-125 transition-transform transform-gpu text-center">Copy n Go</button></Link>
			</div>
		</div>
	);
}

