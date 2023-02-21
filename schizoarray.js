const schizoimages = [];
const tensions = {"png": true};
(await (await fetch(`https://api.github.com/repos/Exruw/schizoimages/git/trees/${(await (await fetch("https://api.github.com/repos/Exruw/hubvideos/commits")).json())[0]?.commit?.tree?.sha}`)).json()).tree.forEach(v => {
	if (v?.type !== "tree" && v?.path && tensions[v.path.split(".").pop()])
    schizoimages.push(`https://schizo.hubchicken.tk/${encodeURIComponent(v.path)}`);
});
export function schizojump()
{
	return schizoimages[0|(Math.random() * schizoimages.length)]
}

			const sg = document.createElement('div');
			sg.style.position = 'absolute';
			sg.style.top = '0';
			sg.style.left = '0';
			sg.style.width = '100%';
			sg.style.height = '100%';
			document.body.appendChild(sg);


			export function createJuump() {
				const juump = document.createElement('div');
				juump.id = 'juump';
				juump.style.backgroundImage = `url(${schizoimages[Math.floor(Math.random() * (max - min + 1)) + min(0, schizoimages.length - 1)]})`;
				sg.appendChild(juump);

				const speed = Math.floor(Math.random() * (max - min + 1)) + min(45, 110);
				let i = 0;
				const intervalId = setInterval(() => {
					i++;
					juump.style.opacity = i / speed;
					if (i === speed) {
						clearInterval(intervalId);
						sg.removeChild(juump);
					}
				}, 10);
			}
