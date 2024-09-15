import { useState } from "react"
import SuperFunnyLoadingHaha from "../SuperFunnyLoadingHaha";
import ResultLink from "../ResultLink";

export default function ModalComponent() {
	const [url, setUrl] = useState("")
	const [shortUrl, setShortUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const handleMakeItShortClick = () => {
		setIsLoading(true);
		reduceUrl(url).then(response => {
			setShortUrl(response.url);
		}).finally(() => setIsLoading(false));
	};
	return <div className="drop-shadow-md bg-modalColor place-self-center w-5/6 h-5/6 grid grid-cols-1 grid-rows-5 gap-10 p-10">
		<h3 className="place-self-center font-bold text-white">URL REDUCER 🤏</h3>
		<input onChange={(ev => setUrl(ev.target.value))} placeholder="Type your URL to be shortened" className="drop-shadow-2xl text-3xl w-full h-2/4 p-4 place-self-end rounded-lg" />
		<button disabled={url.length <= 10} onClick={handleMakeItShortClick} className="rounded-lg drop-shadow-2xl bg-reduceButtonColor self-start h-2/4 w-1/2 justify-self-center hover:scale-125 transition-transform transform-gpu ">Reduce</button>
		<SuperFunnyLoadingHaha isLoading={isLoading} />
		{shortUrl && <ResultLink url={shortUrl} />}

	</div >
}




async function reduceUrl(url: string): Promise<{ url: string }> {
	var shortened = fetch(`http://localhost:5284/makeItShort?url=${url}`, {
		method: "POST"
	}).then(response => response.json())
	return shortened
}

