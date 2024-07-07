export const fillAnchorsDocs = (anchorsRoot: HTMLUListElement) => {
    const anchors = document.querySelectorAll<HTMLElement>("[data-anchor]");
    
    for (let anchor of anchors) {
        const anchorName = anchor.innerText;
        const anchorId = anchor.id;

        anchorsRoot.innerHTML += `
            <li class="anchorItem">
                <a href="#${anchorId}"># ${anchorName}</a>
            </li>
        `;
    }   
}
