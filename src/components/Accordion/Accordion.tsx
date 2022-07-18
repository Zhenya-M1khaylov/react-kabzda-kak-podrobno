import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
    return (
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
                {!props.collapsed && <AccordionBody />}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <div>
            <ul>1</ul>
            <ul>2</ul>
            <ul>3</ul>
        </div>
    )
}

export default Accordion