function customReactElemnt(renderElement,container){
    let domEle = document.createElement(renderElement.type);
    domEle.innerHTML = renderElement.props.children;

    // repating code and if multiple attribute is there then there will be difficult to set
    // domEle.setAttribute('href',renderElement.props.href)
    // domEle.setAttribute('target',renderElement.props.target)

for (const prop in renderElement.props) {
 domEle.setAttribute(prop,renderElement.props[prop])
}


    container.appendChild(domEle)

}

const renderElement ={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank",
        children:"click to visit google"
    }
}

const mainContainer = document.querySelector('#root');

customReactElemnt(renderElement,mainContainer);
