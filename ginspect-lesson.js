var article = document.getElementById('home-page');
undefined
article
<article id=​"home-page">​…​</article>​
var sections = article.getElementsByTagName('section');
undefined
sections
HTMLCollection(2) [section.jumbotron, section.content]0: section.jumbotron1: section.contentlength: 2__proto__: HTMLCollection
var leads = document.getElementsByClassName('lead');
undefined
leads
HTMLCollection [p.lead]0: p.leadaccessKey: ""align: ""ariaAtomic: nullariaAutoComplete: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: class, class: class, length: 1}autocapitalize: ""autofocus: falsebaseURI: "https://ferdosull.github.io/manipulating-the-dom/"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList ["lead", value: "lead"]className: "lead"clientHeight: 29clientLeft: 0clientTop: 0clientWidth: 1140contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: nullhidden: falseid: ""innerHTML: "Manipulating the DOM with Javascript."innerText: "Manipulating the DOM with Javascript."inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "p"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: nullnextSibling: textnodeName: "P"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 29offsetLeft: 213offsetParent: bodyoffsetTop: 362offsetWidth: 1140onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<p class="lead">Manipulating the DOM with Javascript.</p>"outerText: "Manipulating the DOM with Javascript."ownerDocument: documentparentElement: section.contentparentNode: section.contentpart: DOMTokenList [value: ""]prefix: nullpreviousElementSibling: nullpreviousSibling: textscrollHeight: 29scrollLeft: 0scrollTop: 0scrollWidth: 1140shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: -1tagName: "P"textContent: "Manipulating the DOM with Javascript."title: ""translate: true__proto__: HTMLParagraphElement(...)length: 1__proto__: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()__proto__: Object
sections = document.querySelector('sections');
null
sections = document.querySelector('section');
<section class=​"jumbotron">​<h1>​The DOM​</h1>​<p>​The good, the bad and the ugly.​</p>​</section>​
sections
<section class=​"jumbotron">​<h1>​The DOM​</h1>​<p>​The good, the bad and the ugly.​</p>​</section>​
sections = document.querySelectorAll('section');
NodeList(2) [section.jumbotron, section.content]0: section.jumbotronaccessKey: ""ariaAtomic: nullariaAutoComplete: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: class, class: class, length: 1}autocapitalize: ""autofocus: falsebaseURI: "https://ferdosull.github.io/manipulating-the-dom/"childElementCount: 2childNodes: NodeList(5) [text, h1, text, p, text]children: HTMLCollection(2) [h1, p]classList: DOMTokenList ["jumbotron", value: "jumbotron"]className: "jumbotron"clientHeight: 240clientLeft: 0clientTop: 0clientWidth: 1140contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: h1hidden: falseid: ""innerHTML: "↵                <h1>The DOM</h1>↵                <p>The good, the bad and the ugly.</p>↵            "innerText: "The DOM↵↵The good, the bad and the ugly."inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: plocalName: "section"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: section.contentnextSibling: textnodeName: "SECTION"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 240offsetLeft: 213offsetParent: bodyoffsetTop: 92offsetWidth: 1140onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<section class="jumbotron">↵                <h1>The DOM</h1>↵                <p>The good, the bad and the ugly.</p>↵            </section>"outerText: "The DOM↵↵The good, the bad and the ugly."ownerDocument: documentparentElement: article#home-pageparentNode: article#home-pagepart: DOMTokenList [value: ""]prefix: nullpreviousElementSibling: nullpreviousSibling: textscrollHeight: 240scrollLeft: 0scrollTop: 0scrollWidth: 1140shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: -1tagName: "SECTION"textContent: "↵                The DOM↵                The good, the bad and the ugly.↵            "title: ""translate: true__proto__: HTMLElement(...)1: section.contentaccessKey: ""ariaAtomic: nullariaAutoComplete: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: class, class: class, length: 1}autocapitalize: ""autofocus: falsebaseURI: "https://ferdosull.github.io/manipulating-the-dom/"childElementCount: 1childNodes: NodeList(3) [text, p.lead, text]children: HTMLCollection [p.lead]classList: DOMTokenList ["content", value: "content"]className: "content"clientHeight: 29clientLeft: 0clientTop: 0clientWidth: 1140contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: p.leadhidden: falseid: ""innerHTML: "↵                <p class="lead">Manipulating the DOM with Javascript.</p>↵            "innerText: "Manipulating the DOM with Javascript."inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: p.leadlocalName: "section"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: nullnextSibling: textnodeName: "SECTION"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 29offsetLeft: 213offsetParent: bodyoffsetTop: 362offsetWidth: 1140onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<section class="content">↵                <p class="lead">Manipulating the DOM with Javascript.</p>↵            </section>"outerText: "Manipulating the DOM with Javascript."ownerDocument: documentparentElement: article#home-pageparentNode: article#home-pagepart: DOMTokenList [value: ""]prefix: nullpreviousElementSibling: section.jumbotronpreviousSibling: textscrollHeight: 29scrollLeft: 0scrollTop: 0scrollWidth: 1140shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: -1tagName: "SECTION"textContent: "↵                Manipulating the DOM with Javascript.↵            "title: ""translate: true__proto__: HTMLElement(...)length: 2__proto__: NodeList
var lead = document.querySelector('lead');
undefined
lead
null
var lead = document.querySelector('.lead');
undefined
lead
<p class=​"lead">​Manipulating the DOM with Javascript.​</p>​
lead.textContent
"Manipulating the DOM with Javascript."
article = document.getElementById('home-page');
<article id=​"home-page">​…​</article>​
article.choldren
undefined
article.children
HTMLCollection(2) [section.jumbotron, section.content]0: section.jumbotron1: section.contentlength: 2__proto__: HTMLCollection
article.parentElement
<div class=​"container">​::before​<nav class=​"navbar navbar-default">​…​</nav>​<article id=​"home-page">​…​</article>​::after​</div>​
var section = article.firstElementChild
undefined
section
<section class=​"jumbotron">​…​</section>​
section.nextElementSibling
<section class=​"content">​…​</section>​<p class=​"lead">​Manipulating the DOM with Javascript.​</p>​</section>​
var li = document.createElement('li');
undefined
li
<li>​</li>​
li.classList.add('last');
undefined
li.style.backgroundColor = 'pink';
"pink"
var a = document.createElement('a');
undefined
a.textContent = "Four"
"Four"
a.style.colour = 'white';
"white"
li.appendChild(a);
<a>​Four​</a>​
li
<li class=​"last" style=​"background-color:​ pink;​">​<a>​Four​</a>​</li>​
a.style.color = 'white';
"white"
li.appendChild(a);
<a style=​"color:​ white;​">​Four​</a>​
li
<li class=​"last" style=​"background-color:​ pink;​">​<a style=​"color:​ white;​">​Four​</a>​</li>​
var uls = document.getElementsByTagName('ul');
undefined
uls
HTMLCollection [ul.nav.navbar-nav]0: ul.nav.navbar-navlength: 1__proto__: HTMLCollection
var ul = uls[0];
undefined
ul
<ul class=​"nav navbar-nav">​::before​<li class=​"active">​…​</li>​<li>​…​</li>​<li>​…​</li>​::after​</ul>​
ul.appendChild
ƒ appendChild() { [native code] }
ul.appendChild(li)
<li class=​"last" style=​"background-color:​ pink;​">​…​</li>​
var ul = document.getElementsByTagName('ul');
undefined
ul
HTMLCollection [ul.nav.navbar-nav]
var lis = ul[0].getElementsByTagName('li');
undefined
lis
HTMLCollection(4) [li.active, li, li, li.last]0: li.active1: li2: li3: li.lastlength: 4__proto__: HTMLCollection
var firstLi = lis[0]
undefined
var lastLi = lis[3]
undefined
firstLi.classList.remove('active');
undefined
ul[0].insertBefore(lastLi, firstLi);
<li class=​"last" style=​"background-color:​ pink;​">​…​</li>​
for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = 'pink';
}
"pink"