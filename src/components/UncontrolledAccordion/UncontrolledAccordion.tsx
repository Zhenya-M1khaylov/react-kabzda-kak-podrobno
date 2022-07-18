import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
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

export default UncontrolledAccordion