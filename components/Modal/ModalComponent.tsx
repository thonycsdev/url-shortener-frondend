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
	return <div className="drop-shadow-md bg-modalColor rounded-lg w-3/4 min-h-96 grid grid-cols-1">
		<h3 className="font-bold text-white text-center  self-center">URL REDUCER 🤏</h3>
		<input onChange={(ev => setUrl(ev.target.value))} placeholder="Type your URL to be shortened" className="drop-shadow-2xl w-11/12 h-7 p-4 rounded-lg place-self-center" />
		<button disabled={url.length <= 10} onClick={handleMakeItShortClick} className=" bg-reduceButtonColor h-fit p-2 rounded-lg justify-self-center hover:scale-125 transition-transform transform-gpu ">Reduce</button>
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

